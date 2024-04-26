import { createRouter, createWebHistory } from "vue-router";
import login from "../components/Auth/login-form.vue";
import signup from "../components/Auth/signup.vue";
import Homepage from "@/components/Home/Homepage.vue";
import Profile from "@/components/Home/homeScreen/homeSection/Profile/user-profile.vue";
import userSearch from "@/components/Home/homeScreen/homeSection/search/search.vue";
import userMessage from "@/components/Home/homeScreen/homeSection/message/message.vue";
import userNotification from "@/components/Home/homeScreen/homeSection/notification/notification.vue";
import userCreate from "@/components/Home/homeScreen/homeSection/create/create.vue";
import userfeed from "@/components/Home/homeScreen/homeSection/feed/user-feed.vue";
import UserProfile from "@/components/Home/homeScreen/homeSection/feed/userprofile/userprofile.vue";

import { useloginStore } from "@/stores/login";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: login,
      meta: { requiresAuth: false },
    },
    {
      path: "/signup",
      name: "signup",
      component: signup,
      meta: { requiresAuth: false },
    },
    {
      path: "/home",
      name: "Home",
      component: Homepage,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "Home",
          component: userfeed,
        },
        {
          path: "Profile",
          name: "Profile",
          component: Profile,
        },
        {
          path: "Search",
          name: "Search",
          component: userSearch,
        },
        {
          path: "Notification",
          name: "Notification",
          component: userNotification,
        },
        {
          path: "Create",
          name: "Create",
          component: userCreate,
        },
        {
          path: "Message",
          name: "Message",
          component: userMessage,
        },
        {
          path: "user/:username",
          name: "user",
          component: UserProfile,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useloginStore();
  const { Authenticate } = storeToRefs(store);
  
  console.log(to.meta.requiresAuth,Authenticate.value )
  console.log(to.meta.requiresAuth,Authenticate.value)
  if (to.meta.requiresAuth && !Authenticate.value) {
    console.log("1st block")
    next({ name: 'login' });
  } else if (!to.meta.requiresAuth && Authenticate.value) {
    console.log("2nd block")
    next({ name: 'Home' });
  } else {
    console.log("else block")
    next();
  }
});

export default router;
