import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { PnOption } from "@postnord/web-components/components/pn-option";
customElements.define("pn-option", PnOption);
import { PnSelect } from "@postnord/web-components/components/pn-select";
customElements.define("pn-select", PnSelect);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
