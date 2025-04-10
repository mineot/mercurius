import axios from 'axios';
import toogleSidebar from './sidebar';

(window as any).axios = axios;
(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
(window as any).sidebar = () => toogleSidebar();
