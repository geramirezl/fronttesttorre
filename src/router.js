
import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import UserSkills from './components/UserSkills.vue';



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
          path: '/',
          name: 'home',
          component: HomePage
        },
        {
          path: '/about',
          name: 'about',
          component: AboutPage
        },
        {
          path: '/skills',
          name:'skills',
          component:UserSkills
        }
      ]

});

export default router;
