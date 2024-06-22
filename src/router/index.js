import { createRouter, createWebHistory } from "vue-router";
import Main from '../layouts/Main.vue';
import Home from '../views/Home.vue';
import Weather from '../views/Weather.vue';



const routes = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '', 
        component: Home 
      },
      { path: 'Weather', 
        component: Weather 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
