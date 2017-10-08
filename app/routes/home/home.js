import modelHome from './model';
import viewHome from './view';
import controllerHome from './controller'

class HomeComponent {
  constructor(name) {
    this.name = name;
    this.model = "";
    this.view = "";
    this.controller = "";
  }

  MVC() {
    this.model = new modelHome();
    this.view = new viewHome(this.model);
    this.controller = new controllerHome(this.model,this.view);
    }

  render() {
    return `
      <h1>Mtg Discovery</h1>
      <h3>The best of the best</h3>
      <input id="sFld" list="comuni" type="text">
      <button id="sBtn">Search</button>
      <datalist id="comuni">
      </datalist>`
  }
}

export default HomeComponent;
