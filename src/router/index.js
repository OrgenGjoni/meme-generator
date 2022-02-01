import { createRouter, createWebHistory } from "vue-router";
import {Main, Category} from "../containers";

const routes = [
    {path: "/", name: "Main", component: Main},
    {path: "/category", name: "Category", component: Category},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;