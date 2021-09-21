import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Listado_Producto from '../components/Listado_Producto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Listado_Producto',
    name: 'Listado_Producto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Listado_Producto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router