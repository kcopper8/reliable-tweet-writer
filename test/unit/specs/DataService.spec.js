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
