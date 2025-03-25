// src/main.ts
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

const app = createApp(App);
app.use(router);

app.mount('#app');
