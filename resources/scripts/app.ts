import { toggleBackdropGlass } from './utilities/backdrop-glass';
import { toggleSidebar } from './utilities/sidebar';
import axios from 'axios';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

(window as any).backdropGlass = () => toggleBackdropGlass();
(window as any).sidebar = () => toggleSidebar();
