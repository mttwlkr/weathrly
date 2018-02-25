class LocalStorage {
  constructor() {
    this.store = {};
  }

  //recreating local storage functionality
  setItem(key, string) {
    this.store[key] = string;
  }

  getItem(key) {
    return this.store[key];
  }

  clear() {
    this.store = {}
  }
}

global.localStorage = new LocalStorage;