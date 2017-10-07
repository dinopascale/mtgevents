import App from './lib/app'
import Router from './lib/router'
//import About from './components/about'
import Home from './Routes/home'

const app = new App('#app');

let homePage = new Home('home');

app.addComponent(homePage);

const router = new Router(app);
router.addRoute('about', '^#/about$');
