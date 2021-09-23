import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '..\views\Home.html'

const routes = [
  {
    path: '\',
    name: 'Home',
    component: Home,
    meta: {
      title: "E-Medical"
    }
  },
  {
    path: '\login',
    name: 'Login',
    meta: {
      title: "Login"
    },
    component: () => import('..\views\Login.html')
  },
  {
    path: '\medicalForum',
    name: 'medicalForum',
    component: () => import('..\views\MedicalForum.html'),
    meta: {
      title: "Medical Forum"
    }
  },
  {
    path: '\medicalvideo',
    name: 'medicalvideo',
    component: () => import('..\views\Medicalvideo.html'),
    meta: {
      title: "Medical Video"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
