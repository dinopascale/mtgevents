class Cell {
  constructor(name) {
    this.name = name;
  }

  active(listOrganelle) {
    Array.prototype.forEach.call(listOrganelle,el => {
      el.controller();
    })
  }

express(listOrganelle) {
    let structure = ``;
    Array.prototype.forEach.call(listOrganelle,el => {
      structure += el.view();
    })
    return structure
  }
}

export default Cell;
