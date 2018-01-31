import DataService from '@/service/DataService';

function testSuit() {
  const testStorage = {};
  return {
    testStorage,
    dataService: DataService.buildWithStorage(testStorage),
  };
}

describe('DataService', () => {
  it('should exist', () => {
    expect(DataService).toBeTruthy();
  });

  it('저장한 텍스트를 반환한다.', () => {
    const { dataService } = testSuit();

    dataService.save('hello');

    expect(dataService.load()).toBe('hello');
  });

  describe('의 thread 동작', () => {
    it('텍스트 하나 저장시 길이 1개짜리 스레드를 반환한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');

      const threadList = dataService.threadList();
      expect(threadList).toHaveLength(1);
      expect(threadList[0].text).toBe('hello');
    });
    it('여러 종류의 텍스트를 저장하고 목록을 반환한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');

      const threadList = dataService.threadList();
      expect(threadList).toHaveLength(2);
      expect(threadList[0].text).toBe('hello');
      expect(threadList[1].text).toBe('hello2');
    });
    it('thread 를 변경한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');
      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.setCurrentThread(previousThread.id);

      expect(dataService.load()).toBe('hello');

      dataService.save('hello3');
      expect(dataService.threadList().find(({ id }) => previousThread.id === id).text).toBe('hello3');
    });
    it('thread 를 삭제한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');
      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.clear(previousThread.id);

      const threadList = dataService.threadList();
      expect(threadList).toHaveLength(1);
      expect(threadList[0].text).toBe('hello2');
    });
    it('동일 storage 에서 새 DataService 를 만들면 마지막 편집하던 텍스트를 반환한다.', () => {
      const { dataService, testStorage } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');

      const newDataService = DataService.buildWithStorage(testStorage);
      expect(newDataService.load()).toBe('hello2');
    });
    it('thread 를 변경해두면, 동일 storage 에서 새 DataService 를 만들어도 마지막 편집하던 텍스트를 반환한다.', () => {
      const { dataService, testStorage } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');
      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.setCurrentThread(previousThread.id);

      const newDataService = DataService.buildWithStorage(testStorage);
      expect(newDataService.load()).toBe('hello');
    });
    it('새 thread 를 만들 때는 기존 thread 와 겹치지 않아야 한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.newThread();
      dataService.save('hello2');
      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.setCurrentThread(previousThread.id);
      dataService.newThread();

      expect(dataService.threadList()).toHaveLength(3);
    });
    it('reply id 를 저장할 수 있어야 한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.saveReplyId('958713389915631616');
      expect(dataService.load()).toBe('hello');
      expect(dataService.loadReplyId()).toBe('958713389915631616');
    });
    it('reply id 는 thread 에 따라 따로 저장되어야 한다..', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.saveReplyId('958713389915631616');
      dataService.newThread();
      dataService.save('hello2');
      expect(dataService.loadReplyId()).toBeFalsy();

      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.setCurrentThread(previousThread.id);
      expect(dataService.loadReplyId()).toBe('958713389915631616');
    });
    it('reply id 는 clear 때 같이 사라져야 한다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.saveReplyId('958713389915631616');
      const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
      dataService.clear(previousThread.id);
      dataService.setCurrentThread(previousThread.id);
      expect(dataService.loadReplyId()).toBeFalsy();
    });
    it('reply id 만 지울 수 있다.', () => {
      const { dataService } = testSuit();

      dataService.save('hello');
      dataService.saveReplyId('958713389915631616');
      dataService.removeReplyId();
      expect(dataService.loadReplyId()).toBeFalsy();
      expect(dataService.load()).toBe('hello');
    });
  });

  describe('migration', () => {
    it('storage 에 lastText 가 있다면 기존 데이터가 로드되어야 한다.', () => {
      const { dataService, testStorage } = testSuit();

      testStorage.lastText = 'hello';
      dataService.migrate();

      expect(dataService.load()).toBe('hello');
    });
    it('migrate() 후에 storage 에 버전이 저장되어 있어야 한다..', () => {
      const { dataService, testStorage } = testSuit();

      dataService.migrate();

      expect(testStorage['rtw.version']).toBe('1.1');
    });
  });
});
