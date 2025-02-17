import { Component } from 'vue';

import LayoutComponent from '@component/layout/Layout.vue';

const components: { [key: string]: Component } = {
  'app-layout': LayoutComponent,
};

export function appComponents(app: any): void {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
