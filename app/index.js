import App from './lib/app'
import Router from './lib/router'
import searchingForm from './components/searchingForm'
import About from './components/about'
import API from './lib/api'

const app = new App('#app');
const api = new API();

let homePage = new searchingForm('home');
let aboutPage = new About('about');

app.addComponent(homePage);
app.addComponent(aboutPage);


const router = new Router(app);
router.addRoute('about', '^#/about$');
