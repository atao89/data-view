import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   redirect: '/home',
  //   name: "App",
  //   component: () =>
  //     import(/* webpackChunkName: "layout" */ "@/App.vue"),
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'Home',
  //       component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  //     },
  //     {
  //       path: '/second-page',
  //       name: 'SecondPage',
  //       component: () => import(/* webpackChunkName: "second-page" */ '../views/SecondPage.vue')
  //     },
  //     {
  //       path: '/third-page',
  //       name: 'ThirdPage',
  //       component: () => import(/* webpackChunkName: "third-page" */ '../views/ThirdPage.vue')
  //     }
  //   ]
  // }

  // ---------新的方式引入---------
  {
    path: "/",
    redirect: '/datav1',
    name: "App",
    component: () => import(/* webpackChunkName: "layout" */ "@/App.vue"),
    children: [
      {
        path: '/datav1',
        name: 'DataView1',
        component: () => import(/* webpackChunkName: "datav1" */ '@/views/datav1/index.vue')
      },
      {
        path: '/datav2',
        name: 'DataView2',
        component: () => import(/* webpackChunkName: "datav2" */ '@/views/datav2/index.vue')
      },
      // {
      //   path: '/datav3',
      //   name: 'DataView3',
      //   component: () => import(/* webpackChunkName: "datav3" */ '@/views/datav3/index.vue')
      // },
      // {
      //   path: '/second-page',
      //   name: 'SecondPage',
      //   component: () => import(/* webpackChunkName: "second-page" */ '@/views/SecondPage.vue')
      // },
      // {
      //   path: '/third-page',
      //   name: 'ThirdPage',
      //   component: () => import(/* webpackChunkName: "third-page" */ '@/views/ThirdPage.vue')
      // }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
