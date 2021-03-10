import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

import mitt from 'mitt';

import './assets/styles/tailwind.css';

const app = createApp(App);
app.use(router);
app.use(store);

app.config.globalProperties.emitter = mitt();

app.mount('#app');
