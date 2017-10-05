class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.componentsByName = {};
  }

  addComponent(component) {
    this.componentsByName[component.model.name] = component;
  }

  mountComponent(name) {
    this.currentComponent = this.componentsByName[name];
    this.updateGlobalView()
  }

  updateGlobalView() {
    const mounting = new Promise((resolve,reject) => {
      this.appElement.innerHTML = this.currentComponent.view()
      resolve();
    })
      .then( () => {
        this.currentComponent.controller();
      })
  }
}
export default App;
