import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from "@jupyterlab/application";

/**
 * Initialization data for the night-owl extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: "night-owl",
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log("JupyterLab extension night-owl is activated!");
  }
};

export default extension;
