class APP {
  constructor(selector) {
    this.appElement = document.querySelector(selector);
    this.componentsByName = {};
  }

  addComponent(component) {
    this.componentsByName[component.name] = component;
    //component.model = this.proxify(component.model);
  }

  showComponent(name) {
    this.currentComponent = this.componentsByName[name];

    if(this.currentComponent) {
    //this.currentComponent.controller(this.currentComponent.model);
    }
    this.updateView()
  }

  updateView() {
    new Promise((resolve, reject) => {
      console.log(this.currentComponent.name);
      this.appElement.innerHTML = this.currentComponent.render()
      resolve();
    })
     .then( () => {
       this.currentComponent.MVC()
       //this.currentComponent.view(this.currentComponent.model, this.currentComponent.controller);
    });
  }

  /*proxify(model) {
    const self = this;
    return new Proxy(model, {
      set(target,property,value) {
       //console.log(target);
       console.log('Changing', property, 'from', target[property], 'to', value);
        target[property] = value;
        self.updateView();
        return true;
      }
    })
  }*/
}
//UPDATE VIEW SARA PRIMA CANCELLARE CHILD E POI METTERLI
export default APP
