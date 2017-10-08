function Subject () {
  const observers = []
  return {
    add: item => {
      observers.push(item)
    },
    removeAll: () => {
      observers.length = 0;
    },
    notifyObservers: () => {
      observers.forEach(el => {
        el.notify();
      });
    }
  };
}

export default Subject;
