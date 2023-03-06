import { Plugin } from 'vue';

export const focus: Plugin = {
  install(app) {
    app.directive('focus', {
      mounted: (el) => el.focus(),
    });
  },
};
