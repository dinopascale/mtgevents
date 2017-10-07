class App {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.componentsByName = {};
  }

  addComponent(component) {
    this.componentsByName[component.name] = component;
  }

  mountComponent(name) {
    this.currentComponent = this.componentsByName[name];
    this.updateGlobalView()
  }

  updateGlobalView() {
    const mounting = new Promise((resolve,reject) => {
      this.appElement.innerHTML = this.currentComponent.render()
      resolve();
    })
      .then( () => {
        this.currentComponent.addReceptor();
      })
  }
}
export default App;
