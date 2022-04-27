import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import AppSecond from './components/Portfolio.vue';

const app = createApp(App);
const appSecond = createApp(AppSecond);
app.use(createPinia());
app.use(router);

app.mount("#app");
appSecond.mount("#appSecond");
