import { Component } from 'vue';

import LayoutComponent from '@component/layout/Layout.vue';
import ProfileLargeWidget from '@widget/ProfileLarge.vue';
import ProfileSmallWidget from '@widget/ProfileSmall.vue';

const components: { [key: string]: Component } = {
  'app-layout': LayoutComponent,
  'wapp-profile-large': ProfileLargeWidget,
  'wapp-profile-small': ProfileSmallWidget,
};

export function appComponents(app: any): void {
  for (const key in components) {
    app.component(key, components[key]);
  }
}
