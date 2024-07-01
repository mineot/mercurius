import { componentRegistrator } from "@component/registrator";
import { layoutRegistrator } from "@layout/registrator";
import { widgetRegistrator } from "@widget/registrator";

export function geralRegistrator(app: any) {
  componentRegistrator(app);
  layoutRegistrator(app);
  widgetRegistrator(app);
}
