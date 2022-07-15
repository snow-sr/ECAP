import { createApp } from "vue";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";

import App from "./App.vue";
import router from "./router";
import "tw-elements";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  createAuth0({
    domain: "dev-ndpugy11.us.auth0.com",
    client_id: "Oz2Z120aUeN6BzCBRVQCWDVzEQPhBdFU",
    redirect_uri: "http://localhost:3000/",
  })
);

app.mount("#app");
