<script setup>
import SideScreen from './sidebar/side-screen.vue';
import homeScreen from './homeScreen/homeScreen.vue';

import { useloginStore } from '@/stores/login';

const store = useloginStore()

const access_token = localStorage.getItem('accessToken');
console.log(access_token)

store.$patch((state)=>{
state.Authenticate = access_token
})

</script>

<template>
  <div id="App-Container">
    <div id="Header-Sec">
      <SideScreen/>
    </div>
    
    <div id="Chat-Sec">
        <homeScreen/>
    </div>
  </div>
</template>

<style scoped>
#App-Container {
  display: flex;
  overflow: hidden;
}

#Header-Sec {
  height: 100vh;
  width: 20vw;
  background-color: #121212;
  color: #878a92;
}

#Chat-Sec {
  height: 100vh;
  width: 80vw;
  background: #0e0f0f;
  color: #878a92;
}


</style>
