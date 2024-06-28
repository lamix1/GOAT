import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index';

import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";

addIcons(FaFlag, RiZhihuFill);


import materialKit from './material-kit';

const app = createApp(App)

app.component("v-icon", OhVueIcon);
app.use(createPinia())
app.use(router)
app.use(materialKit);
app.mount('#app')
