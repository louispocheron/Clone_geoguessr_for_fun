import { createRouter, createWebHistory } from "vue-router";

// IMPORT DE TOUTES LES ROUTES
import home from "@/views/home.vue";
import login from "@/views/login.vue";
import play from "@/views/play.vue";

const routes = [{
    name: "home",
    path: "/",
    component: home
},
{
    name: "login",
    path: "/login",
    component: login
},
{
    name: "play",
    path: "/play",
    component: play
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});



export default router;