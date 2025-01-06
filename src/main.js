import { createApp } from "vue";
import App from "./App.vue";

import("./eventbus").then((res) => {
  console.log(res);
});

createApp(App).mount("#app");
