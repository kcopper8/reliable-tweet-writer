export default class DataService {
  constructor(storage) {
    this.storage = storage || localStorage;
  }

  static build() {
    return new DataService();
  }

  static buildWithStorage(storage) {
    return new DataService(storage);
  }

  save(message) {
    this.storage.lastText = message;
  }
  clear() {
    this.storage.lastText = '';
  }
  load() {
    if (this.storage.lastText) {
      return this.storage.lastText;
    }

    return '';
  }
}
