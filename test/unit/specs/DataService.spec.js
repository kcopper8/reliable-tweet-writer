import DataService from '@/service/DataService';

// test data
// window.localStorage['rtw.version'] = '1.1';
// window.localStorage.currentThreadId = '4';
// window.localStorage['replyId.17'] = '958713389915631616';
// window.localStorage['thread.3'] = '실제 해봤을 때 유니티는 악평과 달리 아주 재밌었지만... 트레일러가 준 기대치를 충족시켜주지는 못했다. 트레일러가 너무 명작이었어...';
// window.localStorage['thread.4'] = '트위터 앱에 임시 보관함 기능이 있긴 한데, 한계가 있다. 명시적으로 임시보관한 것은 나중에 다시 불러올 수 있지만, 임시보관 버튼을 누르지 않았다면 보관하지 않는다.';
// window.localStorage['thread.13'] = 'fewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgew↵fewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgew↵fewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgew↵↵fewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgewfewgewgew';
// window.localStorage['thread.17'] = '소금 행성에서 레아 장군님 요새 앞에서 계시는 모습 정말 멋있었다. 근데 왜 최고 지휘관이 관문 앞에서 망을 보다가 뭐가 접근하니까 문 닫으라고 전달하는, 보초 역할을 하고 있었을까? 를 생각해보면 ↵↵그걸 할 수 있는 사람이 레아 밖에 없었던 것 아닐까. ↵↵이동하는 아군 수송선 중 통신 연결이 되지 않는 게 있는데, 요새 레이더 설비 상태가 엉망이라 위치 파악도 안 됨. 퍼스트 오더가 오고 있을 테니 마냥 관문을 열어둘 수는 없는데, 그렇다고 관문을 닫자니 뒤늦게 오는 아군이 있다면 못 들어올지도 모름. 레이더가 있었다면 아군기 위치와 이동속도 파악해 타이밍 맞게 관문을 닫으면 되는 단순한 문제인데 레이더가 없어 문제가 복잡해졌음. ↵↵살아남은 저항군 지휘부는 두 편으로 나뉘어 얼른 관문을 닫아야 한다, 뒤쳐져 있을지 모르는 동료를 버릴 수 없으니 끝까지 열고 기다려야 한다. 그랬다가 타이밍 늦어서 적기가 관문 안에 들어오면 어떡하냐 공격기 한대만 들어와도 우리는 다 죽는다. 갑론을박하면서 지도부는 패닉 하고 있는데, 백전노장 레아 장군님은 그게 왜 문제인지 이해를 못하고 있다. ↵↵"아니, 그걸 왜 토론을 하고 있어. 보고 있다가 적기 보이면 진입 범위 들어오기 전에 문 닫으면 되잖아." ↵"장군님. 색적 설비가 동작하지 않아서 "';
// window.localStorage['thread.18'] = '지난 화 다시 보고 왔는데 딱히 로덴의 말에 틀린 점은 없음. 실제로 검성 이만 자신만의 목적도 없고 노바 공주를 너무 쉽사리 믿는 모습까지.. 로덴이 확실하게 집었음. 정말 친구를 걱정해서 해주는 말 맞는 ↵↵gewge↵fefewgew↵↵↵↵↵dwqfq↵↵↵↵↵↵fwqfwqfw↵↵↵fewgweg';
// test data

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

  // it('저장한 텍스트를 반환한다.', () => {
  //   const { dataService } = testSuit();

  //   dataService.save('hello');

  //   expect(dataService.load()).toBe('hello');
  // });

  describe('의 thread 동작', () => {
    // it('텍스트 하나 저장시 길이 1개짜리 스레드를 반환한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');

    //   const threadList = dataService.threadList();
    //   expect(threadList).toHaveLength(1);
    //   expect(threadList[0].text).toBe('hello');
    // });
    // it('여러 종류의 텍스트를 저장하고 목록을 반환한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');

    //   const threadList = dataService.threadList();
    //   expect(threadList).toHaveLength(2);
    //   expect(threadList[0].text).toBe('hello');
    //   expect(threadList[1].text).toBe('hello2');
    // });
    // it('thread 를 변경한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');
    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.setCurrentThread(previousThread.id);

    //   expect(dataService.load()).toBe('hello');

    //   dataService.save('hello3');
    //   expect(dataService.threadList().find(({ id }) => previousThread.id === id).text).toBe('hello3');
    // });
    // it('thread 를 삭제한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');
    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.clear(previousThread.id);

    //   const threadList = dataService.threadList();
    //   expect(threadList).toHaveLength(1);
    //   expect(threadList[0].text).toBe('hello2');
    // });
    // it('동일 storage 에서 새 DataService 를 만들면 마지막 편집하던 텍스트를 반환한다.', () => {
    //   const { dataService, testStorage } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');

    //   const newDataService = DataService.buildWithStorage(testStorage);
    //   expect(newDataService.load()).toBe('hello2');
    // });
    // it('thread 를 변경해두면, 동일 storage 에서 새 DataService 를 만들어도 마지막 편집하던 텍스트를 반환한다.', () => {
    //   const { dataService, testStorage } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');
    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.setCurrentThread(previousThread.id);

    //   const newDataService = DataService.buildWithStorage(testStorage);
    //   expect(newDataService.load()).toBe('hello');
    // });
    // it('새 thread 를 만들 때는 기존 thread 와 겹치지 않아야 한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.newThread();
    //   dataService.save('hello2');
    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.setCurrentThread(previousThread.id);
    //   dataService.newThread();

    //   expect(dataService.threadList()).toHaveLength(3);
    // });
    // it('reply id 를 저장할 수 있어야 한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.saveReplyId('958713389915631616');
    //   expect(dataService.load()).toBe('hello');
    //   expect(dataService.loadReplyId()).toBe('958713389915631616');
    // });
    // it('reply id 는 thread 에 따라 따로 저장되어야 한다..', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.saveReplyId('958713389915631616');
    //   dataService.newThread();
    //   dataService.save('hello2');
    //   expect(dataService.loadReplyId()).toBeFalsy();

    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.setCurrentThread(previousThread.id);
    //   expect(dataService.loadReplyId()).toBe('958713389915631616');
    // });
    // it('reply id 는 clear 때 같이 사라져야 한다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.saveReplyId('958713389915631616');
    //   const previousThread = dataService.threadList().find(({ text }) => text === 'hello');
    //   dataService.clear(previousThread.id);
    //   dataService.setCurrentThread(previousThread.id);
    //   expect(dataService.loadReplyId()).toBeFalsy();
    // });
    // it('reply id 만 지울 수 있다.', () => {
    //   const { dataService } = testSuit();

    //   dataService.save('hello');
    //   dataService.saveReplyId('958713389915631616');
    //   dataService.removeReplyId();
    //   expect(dataService.loadReplyId()).toBeFalsy();
    //   expect(dataService.load()).toBe('hello');
    // });
  });

  describe('migration', () => {
    it('storage 에 lastText 가 있다면 기존 데이터가 로드되어야 한다.', () => {
      const { dataService, testStorage } = testSuit();

      testStorage.lastText = 'hello';
      dataService.migrate();

      const id = dataService.getCurrentThreadId();
      const result = dataService.threadList().find(thread => thread.id === id);
      expect(result.text).toBe('hello');
    });
    it('migrate() 후에 storage 에 버전이 저장되어 있어야 한다..', () => {
      const { dataService, testStorage } = testSuit();

      dataService.migrate();

      expect(testStorage['rtw.version']).toBe('1.2');
    });
  });
});
