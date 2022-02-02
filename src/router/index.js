import { createRouter, createWebHistory } from "vue-router";
import {Main, CaptionMeme} from "../containers";

const routes = [
    {path: "/", name: "Main", component: Main},
    {path: "/caption-selected", name: "CaptionMeme", component: CaptionMeme},
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;