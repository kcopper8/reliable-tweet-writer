import Storage from '../service/StorageHolder';
import DataService from '../service/DataServiceHolder';

const debug = process.env.NODE_ENV !== 'production';

function emptyThread(index) {
  return {
    id: index,
    text: '',
    replyId: null,
  };
}

const localStorageSavePlugin = (store) => {
  store.subscribe((mutations, state) => {
    Storage.rtwData = JSON.stringify(state);
  });
};

export default {
  state: {
    editingIndex: DataService.getCurrentThreadId(),
    threads: DataService.threadList(),
  },
  plugins: [localStorageSavePlugin],
  getters: {
    /**
     * 수정중인 thread
     */
    editing(state) {
      const found = state.threads.find(item => item.id === state.editingIndex);
      if (found) {
        return found;
      }

      return {};
    },
  },
  mutations: {
    newThread(state) {
      const currentMaxThreadId = state.threads.reduce((lastMaxThreadId, thread) => {
        if (thread.id > lastMaxThreadId) {
          return thread.id;
        }

        return lastMaxThreadId;
      }, state.editingIndex);

      const newThread = emptyThread(currentMaxThreadId + 1);

      state.threads.push(newThread);
      state.editingIndex = newThread.id;
    },
    setCurrentThreadText(state, text) {
      let found = state.threads.find(thread => thread.id === state.editingIndex);
      if (!found) {
        found = emptyThread(state.editingIndex);
        state.threads.push(found);
      }
      found.text = text;
    },
    setCurrentThreadReplyId(state, replyId) {
      let found = state.threads.find(thread => thread.id === state.editingIndex);
      if (!found) {
        found = emptyThread(state.editingIndex);
        state.threads.push(found);
      }

      if (replyId) {
        found.replyId = replyId;
      } else {
        found.replyId = null;
      }
    },
    delete(state, id) {
      if (state.editingIndex === id) {
        const found = state.threads.find(thread => thread.id === state.editingIndex);
        found.replyId = null;
        found.text = '';
      } else {
        state.threads = state.threads.filter(item => item.id !== id);
      }
    },
    setCurrent(state, id) {
      const found = state.threads.find(thread => thread.id === id);
      if (found) {
        state.editingIndex = id;
      } else {
        const currentThreadFound = state.threads.find(thread => thread.id === state.editingIndex);

        if (!currentThreadFound) {
          if (state.threadList.length > 0) {
            state.editingIndex = state.threadList[0].id;
          } else {
            state.editingIndex = null;
          }
        }
      }
    },
  },
  actions: {},
  strict: debug,
};
