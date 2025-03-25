import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
const routes = [{ path: '/', name: 'Home', component: Home }];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
