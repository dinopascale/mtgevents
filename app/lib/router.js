class Router {
  constructor(app) {
    this.app = app;
    this.routes = [];
    this.hashChange = this.hashChange.bind(this);

    window.addEventListener('hashchange', this.hashChange)
    window.addEventListener('DOMContentLoaded',this.hashChange)
  }
  addRoute(name, url) {
    this.routes.push({
      name,
      url
    })
  }
  hashChange() {
    const hash = window.location.hash;

    const route = this.routes.filter(route => hash.match(new RegExp(route.url)))[0];

    if(route) {
      this.app.showComponent(route.name);
    } else if (hash === "") {
      this.app.showComponent('home');
    } else {

    }
  }
}

export default Router;
