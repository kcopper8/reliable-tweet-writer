export default {
  save(message) {
    localStorage.lastText = message;
  },
  clear() {
    localStorage.lastText = '';
  },
  load() {
    if (localStorage.lastText) {
      return localStorage.lastText;
    }

    return '';
  },
};
