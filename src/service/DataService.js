function isThreadKey(key) {
  return key.startsWith('thread.');
}

function extractIdFromThreadKey(key) {
  return parseInt(key.substr('thread.'.length), 10);
}

function threadKey(id) {
  return `thread.${id}`;
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
    this.storage = storage || localStorage;
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

  get _currentThreadKey() {
    return threadKey(this._currentThreadId);
  }

  migrate() {
    if (this.storage.lastText) {
      this.save(this.storage.lastText);

      delete this.storage.lastText;
    }

    this.storage['rtw.version'] = '1.1';
  }

  save(message) {
    this.storage[this._currentThreadKey] = message;
  }

  saveReplyId(replyId) {
    this.storage[replyIdKey(this._currentThreadId)] = replyId;
  }

  loadReplyId() {
    return this.storage[replyIdKey(this._currentThreadId)];
  }

  removeReplyId() {
    delete this.storage[replyIdKey(this._currentThreadId)];
  }

  clear(threadId) {
    delete this.storage[threadKey(threadId)];
    delete this.storage[replyIdKey(threadId)];
  }

  newThread() {
    const currentMaxThreadId = Object.entries(this.storage)
      .reduce((lastMaxThreadId, entry) => {
        if (isThreadKey(entry[0])) {
          const id = extractIdFromThreadKey(entry[0]);
          if (id > lastMaxThreadId) {
            return id;
          }
        }

        return lastMaxThreadId;
      }, this._currentThreadId);

    this._currentThreadId = currentMaxThreadId + 1;
    this.save('');
  }

  load() {
    const lastText = this.storage[`thread.${this._currentThreadId}`];
    return lastText || '';
  }

  threadList() {
    return Object.entries(this.storage)
      .filter(entry => isThreadKey(entry[0]))
      .map(([key, val]) => {
        const id = extractIdFromThreadKey(key);
        return {
          id,
          text: val,
        };
      });
  }

  setCurrentThread(threadId) {
    this._currentThreadId = threadId;
  }
}
