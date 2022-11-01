import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { PnIcon } from "@postnord/web-components/components/pn-icon";
customElements.define("pn-icon", PnIcon);
import { PnTable } from "@postnord/web-components/components/pn-table";
customElements.define("pn-table", PnTable);

import { PnButton } from "@postnord/web-components/components/pn-button";
customElements.define("pn-button", PnButton);
import { PnOption } from "@postnord/web-components/components/pn-option";
customElements.define("pn-option", PnOption);
import { PnSelect } from "@postnord/web-components/components/pn-select";
customElements.define("pn-select", PnSelect);

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
