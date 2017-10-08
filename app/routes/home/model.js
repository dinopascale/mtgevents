import Subject from '../../lib/subject'

function modelHome() {
  const subject = Subject();
  let autocompleteList = [];
  const cache = {};
  return {
    getList: () => {
      return autocompleteList;
    },
    getCache: () => {
      return cache;
    },
    add: (index,data) => {
      Object.assign(cache, {
        [index]: data
      })
      Array.prototype.forEach.call(data, el => {
        autocompleteList.push(el);
      })
      subject.notifyObservers();
    },
    remove: () => {
      autocompleteList.length = 0;
      subject.notifyObservers();
    },
    isCached: input => {
      if(input in cache) {
        return true
      } else {
        return false;
      }
    },
    getFromCache: input => {
      const a = cache[input];
      Array.prototype.forEach.call(a, el => {
        autocompleteList.push(el)
      })
      subject.notifyObservers();
    },
    register: (...args) => {
      subject.removeAll();
      args.forEach(el => {
        subject.add(el)
      })
    }
  };
}

export default modelHome;
