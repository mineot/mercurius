import "./style.scss";

console.log(`Welcome to ${process.env.APP_NAME}`);

document.title = process.env.APP_NAME ?? "Mercurius";

const main = document.querySelector("main[id]");
const h1 = document.createElement("h1");
h1.innerText = process.env.APP_NAME ?? "Mercurius";
main?.append(h1);
