import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import routes from "./routes.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// createApp(App).mount('#app')
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');