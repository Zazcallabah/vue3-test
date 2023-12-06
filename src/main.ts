import { createApp } from "vue";
import { createPinia } from "pinia";
import { defineCustomElement as pnIcon } from "@postnord/web-components/components/pn-icon";
pnIcon();
import { defineCustomElement as pnTable } from "@postnord/web-components/components/pn-table";
pnTable();
import { defineCustomElement as pnButton } from "@postnord/web-components/components/pn-button";
pnButton();
import { defineCustomElement as pnOption } from "@postnord/web-components/components/pn-option";
pnOption();
import { defineCustomElement as pnSelect } from "@postnord/web-components/components/pn-select";
pnSelect();
import { defineCustomElement as pnSearchField } from "@postnord/web-components/components/pn-search-field";
pnSearchField();
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
