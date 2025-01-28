import "node_modules/bootstrap/dist/js/bootstrap.min";

import axios from "axios";
(window as any).axios = axios;
(window as any).axios.defaults.headers.common["X-Requested-With"] =
    "XMLHttpRequest";
