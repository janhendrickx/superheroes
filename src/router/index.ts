import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/superheroes',
      name: 'Superheroes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Superheroes.vue')
  },
  {
      path: "/superheroes/:slug",
      name: "SuperheroDetails",
      component: () => import(/* webpackChunkName: "SuperheroDetails"*/ "../views/SuperheroDetails.vue"),
  },
    {
        path: "/superheroes/team/:team",
        name: "SuperheroTeam",
        component: () => import(/* webpackChunkName: "SuperheroDetails"*/ "../views/SuperheroDetails.vue"),
    },


  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    {
        path: "/404",
        alias: "*",
        name: "notFound",
        component: () =>
            import(/* webpackChunkName: "NotFound" */
                "../views/NotFound.vue")
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
