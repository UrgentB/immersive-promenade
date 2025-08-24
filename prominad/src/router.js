import { createRouter, createWebHistory } from 'vue-router';
import StartPage from './pages/StartPage.vue';
import LocationPage from './pages/LocationPage.vue';
import FinalPage from './pages/FinalPage.vue';
const routes = [
    { path: '/', name: 'start', component: StartPage },
    // 9 статических маршрутов (под QR), но страница одна — данные подтягиваются по :id
    { path: '/l/:id', name: 'location', component: LocationPage },
    { path: '/final', name: 'final', component: FinalPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];
export const router = createRouter({
    history: createWebHistory('/'),
    routes,
    // при открытии по QR сразу наверх
    scrollBehavior: () => ({ top: 0 })
});
