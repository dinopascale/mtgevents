import App from './lib/app'
import Router from './lib/router'
import API from './lib/api'

const app = new App('#app');
const api = new API();

app.addComponent({
  name: 'home',
  model: {
    title: "MtG Discovery",
    subtitle: "Il tool rapido, veloce ed efficace per cercare i pptq più vicini a te"
  },
  view(model) {
    return `
    <div class='home-content'><div class='logo'></div><h1> ${model.title} </h1><h3> ${model.subtitle}</h3></div><input type="text" /><button>Search</button>
    `;
  },
  controller(model,view) {
  }
});


app.addComponent({
  name: 'about',
  model: {
    title: "About",
    subtitles: ["Perchè","Come","Chi"]
  },
  view(model) {
    return `<h1>${model.title}</h1>`;
  },
  controller(model) {
    api
      .getPPTQ()
      .then(result => {
        console.log(result)
      })
  }
})


const router = new Router(app);
router.addRoute('about', '^#/about$');
