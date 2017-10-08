import APP from './lib/app'
import ROUTER from './lib/router'
import HomeComponent from './routes/home/home'


const app = new APP('#app');
const router = new ROUTER(app);

const home = new HomeComponent('home')

app.addComponent(home);
