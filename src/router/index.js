import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import CampsFechadosView from '@/views/CampsFechadosView.vue';
import CampsAbertosView from '@/views/CampsAbertosView.vue';
import SobreView from '@/views/SobreView.vue';
import ComoParticiparView from '@/views/ComoParticiparView.vue';

import FullLayout from '@/layouts/FullLayout.vue';
// import BlankLayout from '@/layouts/BlankLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FullLayout,
      children: [{

        path: '',
        name: 'home',
        component: HomeView,
      },
      ]
    },

    {
      path: '/',
      component: FullLayout,
      children: [

      {
        path: '/campsfechados',
        name: 'CampsFechados',
        component: CampsFechadosView,
      },
      {
        path: '/campsabertos',
        name: 'CampsAbertos',
        component: CampsAbertosView,
      },
      {
        path: '/sobre',
        name: 'sobre',
        component: SobreView,
      },
      {
        path: '/comoparticipar',
        name: 'comoparticipar',
        component: ComoParticiparView,
      }
    ]
    }
  ]
})

export default router
