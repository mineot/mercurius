import axios from "axios";
import "bootstrap";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

var html = document.getElementsByTagName("html")[0];
html.setAttribute("data-bs-theme", "dark");
