import { createApp } from "./vue.js";
import App from "./views/app.js";

export const init = () => {
  createApp(App).mount('.app');
};