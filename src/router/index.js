import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/Auth/login-form.vue'
import signup from '../components/Auth/signup.vue'
import Homepage from '@/components/Home/Homepage.vue'
import UserProfile from '@/components/Home/homeScreen/homeSection/Profile/user-profile.vue'
import userSearch from '@/components/Home/homeScreen/homeSection/search/search.vue'
import userMessage from '@/components/Home/homeScreen/homeSection/message/message.vue'
import userNotification from '@/components/Home/homeScreen/homeSection/notification/notification.vue'
import userCreate from '@/components/Home/homeScreen/homeSection/create/create.vue'
import userfeed from '@/components/Home/homeScreen/homeSection/feed/user-feed.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },

    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/Home',
      name: '/home',
      component: Homepage,
      children: [
        {
          path: 'Feed',
          component: userfeed,
        },
        {
          path: 'Profile',
          component: UserProfile,
        },
        {
          path: 'Search',
          component: userSearch,
        },
        {
          path: 'Notification',
          component: userNotification,
        },
        {
          path: 'Create',
          component: userCreate,
        },
        {
          path: 'Message',
          component: userMessage,
        },
      ]
    },
  ]
})

export default router


