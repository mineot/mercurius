import { toogleGlass } from './utilities/glass';
import { toogleSidebar } from './utilities/sidebar';
import axios from 'axios';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

(window as any).glass = () => toogleGlass();
(window as any).sidebar = () => toogleSidebar();
