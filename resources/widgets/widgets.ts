import { Component } from 'vue';

import ProfileWidget from '@widget/Profile.vue';

const widgets: { [key: string]: Component } = {
  'wapp-profile': ProfileWidget,
};

export function appWidgets(app: any): void {
  for (const key in widgets) {
    app.component(key, widgets[key]);
  }
}
