import { Component } from 'vue';

import LayoutComponent from '@component/layout/Layout.vue';
import FooterComponent from '@component/layout/Footer.vue';
import HeaderComponent from '@component/layout/Header.vue';
import MainComponent from '@component/layout/Main.vue';
import NavComponent from '@component/layout/Nav.vue';

const components: { [key: string]: Component } = {
  'app-layout': LayoutComponent,
  'app-layout-footer': FooterComponent,
  'app-layout-header': HeaderComponent,
  'app-layout-main': MainComponent,
  'app-layout-nav': NavComponent,
};

export function appComponents(app: any): void {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
