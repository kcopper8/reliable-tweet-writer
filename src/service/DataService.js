function isThreadKey(key) {
  return key.startsWith('thread.');
}

function extractIdFromThreadKey(key) {
  return parseInt(key.substr('thread.'.length), 10);
}

function replyIdKey(id) {
  return `replyId.${id}`;
}

export default class DataService {
  static build() {
    return new DataService();
  }

  static buildWithStorage(storage) {
    return new DataService(storage);
  }

  constructor(storage) {
    this.storage = storage || window.localStorage || {};
  }

  set _currentThreadId(threadId) {
    this.storage.currentThreadId = threadId;
  }

  get _currentThreadId() {
    if (!this.storage.currentThreadId) {
      this._currentThreadId = 0;
    }
    return parseInt(this.storage.currentThreadId, 10);
  }

  migrate() {
    if (this.storage['rtw.version'] !== '1.2') {
      if (this.storage.lastText) {
        this._data = {
          editingIndex: 0,
          threads: [{
            id: 0,
            text: this.storage.lastText,
          }],
        };

        delete this.storage.lastText;
      } else if (this.storage['rtw.version'] === '1.1') {
        this._data = {
          editingIndex: this._currentThreadId,
          threads: this._threadList11(),
        };
        if (this.storage.clear) {
          this.storage.clear();
        } else {
          Object.keys(this.storage).forEach((key) => {
            this.storage[key] = undefined;
            delete this.storage[key];
          });
        }
      }
    }

    if (!this._data) {
      try {
        this._data = JSON.parse(this.storage.rtwData);
      } catch (e) {
        this._data = {
          editingIndex: 0,
          threads: [],
        };
      }
    }

    this.storage.rtwData = JSON.stringify(this._data);
    this.storage['rtw.version'] = '1.2';
  }

  _threadList11() {
    return Object.entries(this.storage)
      .filter(entry => isThreadKey(entry[0]))
      .map(([key, val]) => {
        const id = extractIdFromThreadKey(key);
        return {
          id,
          text: val,
          replyId: this.storage[replyIdKey(id)],
        };
      });
  }

  threadList() {
    return this._data.threads;
  }

  /**
   * 저장된 값이 없으면 0 이 반환된다.
   */
  getCurrentThreadId() {
    return this._data.editingIndex;
  }
}
