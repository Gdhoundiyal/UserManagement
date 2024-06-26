import { createRouter, createWebHistory } from "vue-router";
import login from "../components/Auth/login-form.vue";
import signup from "../components/Auth/signup.vue";
import Homepage from "@/components/Home/Homepage.vue";
import Profile from "@/components/Home/homeScreen/homeSection/Profile/user-profile.vue";
import userSearch from "@/components/Home/homeScreen/homeSection/search/search.vue";
import userMessageList from "@/components/Home/homeScreen/homeSection/message/message.vue";
import userMessage from "@/components/Home/homeScreen/homeSection/message/chatscreen/chat-body.vue";
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
      path: "/home/",
      name: "Home",
      component: Homepage,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "feed",
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
          component: userMessageList,
        },
        {
          path: "user/:username",
          name: "user",
          component: UserProfile,
        },
        {
          path: "Message/:userMessage",
          name: "userMessage",
          component: userMessage,
          props: true
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useloginStore();
  const { Authenticate } = storeToRefs(store);
  const token = localStorage.getItem('accessToken')
  store.$patch((state) => {
    state.Authenticate = token
  })
  
  if (to.meta.requiresAuth && !Authenticate.value) {
    // console.log("1st block")
    next( '/' );
  } else if (!to.meta.requiresAuth && Authenticate.value) {
    // console.log("2nd block")
    next( '/Home/' );
  } else {
    // console.log("else block")
    next();
  }
});

export default router;
