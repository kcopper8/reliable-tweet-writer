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

  it('should save data', () => {
    const { testStorage, dataService } = testSuit();

    dataService.save('hello');

    expect(testStorage.lastText).toBe('hello');
  });

  it('should load data', () => {
    const { testStorage, dataService } = testSuit();

    testStorage.lastText = 'hello';

    expect(dataService.load()).toBe('hello');
  });

  it('should clear', () => {
    const { testStorage, dataService } = testSuit();

    testStorage.lastText = 'hello';
    dataService.clear();

    expect(testStorage.lastText).toBeFalsy();
  });
});
