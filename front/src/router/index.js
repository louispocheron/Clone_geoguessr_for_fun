import { createRouter, createWebHistory } from "vue-router";

// IMPORT DE TOUTES LES ROUTES
import home from "@/views/home.vue";
import login from "@/views/login.vue";

const routes = [{
    name: "home",
    path: "/",
    component: home
},
{
    name: "login",
    path: "/login",
    component: login
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;