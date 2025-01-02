import "@/style.scss";
import { svgLoader } from "@/scripts/svg-loader";

// import { Application, CurrentPage } from "@/scripts/application";

document.body.onload = () => {
  svgLoader();
  document.title = process.env.APP_NAME ?? "Mercurius";
  // Application.initGlobal();
  // Application.instance.load().then((page: CurrentPage) => {
  //   if (page === "home") {
  //     // home();
  //   }
  // });
};
