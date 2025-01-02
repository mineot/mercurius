import "@/main.scss";
import { svgLoader } from "@/scripts/svg-loader";
import { setCopyright } from "@/scripts/copyright";

// import { Application, CurrentPage } from "@/scripts/application";

document.body.onload = () => {
  svgLoader();
  setCopyright(process);
  document.title = process.env.APP_NAME ?? "Mercurius";
  // Application.initGlobal();
  // Application.instance.load().then((page: CurrentPage) => {
  //   if (page === "home") {
  //     // home();
  //   }
  // });
};
