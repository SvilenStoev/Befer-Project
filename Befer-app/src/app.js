import { page } from './lib.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import decorateContext from './middlewares/render.js';

page(decorateContext);
page('/', homePage);
page('/login', loginPage);

page.start();