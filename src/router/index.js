import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetallesView from '../views/DetallesView.vue'


const routes = [
  {
    path: '/', // ruta raiz
    name: 'Home', // le doy el nombre a la ruta
    component: HomeView //le estoi diciendo que vista va renderizar cuando el navegador este en esta ruta "/"
  },
  {
    path: '/detalles/:idPelicula', // ruta del detalle de la pelicula donde declaramos un param id
    name: 'Detalles', // le doy el nombre a la ruta
    component: DetallesView //le estoi diciendo que vista va renderizar cuando el navegador este en esta ruta "/:idPelicula"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
