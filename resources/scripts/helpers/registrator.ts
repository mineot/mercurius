import { componentRegistrator } from "@component/component-registrator";
import { layoutRegistrator } from "@layout/layout-registrator";
import { widgetRegistrator } from "@widget/widget-registrator";

export function registrator(app: any) {
  componentRegistrator(app);
  layoutRegistrator(app);
  widgetRegistrator(app);
}
