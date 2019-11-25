import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/a-propos",
    component: () => import("../views/About.vue")
  },
  {
    path: "/equipe",
    component: () => import("../views/Team.vue")
  },
  {
    path: "/activites",
    component: () => import("../views/Activities.vue")
  },
  {
    path: "/secteurs",
    component: () => import("../views/Secteurs.vue")
  },
  {
    path: "/activite/:id",
    component: () => import("../views/Activity.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/publications",
    component: () => import("../views/Publications.vue")
  },
  {
    path: "/article/:slug",
    component: () => import("../views/Article.vue")
  },
  {
    path: "**",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // linkActiveClass: "activeLink",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router
