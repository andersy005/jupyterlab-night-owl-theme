import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the night-owl extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@andersy005/jupyterlab-night-owl-theme:plugin',
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = '@andersy005/jupyterlab-night-owl-theme/index.css';

    manager.register({
      name: 'JupyterLab Night Owl',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined),
    });
  },

  autoStart: true,
};

export default plugin;
