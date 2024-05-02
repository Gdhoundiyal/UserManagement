<script setup>
import { useNavstore } from '@/stores/nav';
import { ref } from 'vue';
import create from '../homeScreen/homeSection/create/create.vue';

const navStore = useNavstore()
const openmodal = ref(false)


const changeScreen = (event) => {
  const name = event.currentTarget.getAttribute('name');
  navStore.updatesectionName(name)
  if (name === "Create") {
    openmodal.value = true;
    console.log('creaeted pressed')
  } else { console.log('else pressed') }
}

const outside = () => {
  openmodal.value = false;
}
</script>
<template>
  <div id="header-Container">

    <div class="logo">
      <p>JustConnect</p>
    </div>
    <div id="icons">
      <RouterLink to="/home/" class="routestyle">
        <div class="icon-div" name="Feed" @click="changeScreen">
          <i class="pi pi-th-large" id="styles"></i>
          <p>Home</p>
        </div>
      </RouterLink>
      <RouterLink to="/home/Search" class="routestyle">
        <div class="icon-div" name="Search" @click="changeScreen">
          <i class="pi pi-search" id="styles"></i>
          <p>Search</p>
        </div>
      </RouterLink>
      <RouterLink to="/home/Notification" class="routestyle">
        <div class="icon-div" name="Notification" @click="changeScreen">
          <i class="pi pi-bell" id="styles"></i>
          <p>Notification</p>
        </div>
      </RouterLink>
      <RouterLink to="/home/Message" class="routestyle">
        <div class="icon-div" name="Message" @click="changeScreen">
          <i class="pi pi-comments" id="styles"></i>
          <p>Message</p>
        </div>
      </RouterLink>
      <!-- <RouterLink to="/home/Create" class="routestyle"> -->
      <div class="icon-div" name="Create" @click="changeScreen">
        <i class="pi pi-plus-circle" id="styles"></i>
        <p>Create</p>
      </div>
      <!-- </RouterLink> -->
      <RouterLink to="/home/Profile" class="routestyle">
        <div class="icon-div" name="Profile" @click="changeScreen">
          <i class="pi pi-user" id="styles"></i>
          <p>Profile</p>
        </div>
      </RouterLink>
    </div>
    <div v-if="openmodal"  v-click-outside="outside">
      <create/>
    </div>
  </div>
</template>

<style scoped>
#header-Container {
  height: 100vh;
  padding: 7px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #3a3a3c;
  border-radius: 5px;
}

.logo p {
  font-size: 20px;
  padding: 20px;
}

.routestyle {
  color: #878a92;
  text-decoration: none;
}

#icons {
  display: flex;
  flex-direction: column;
  padding: 20px 10px 10px 10px;
  ;
  gap: 2.4rem;
}

.icon-div {
  display: flex;
  align-items: center;
}

.pi {
  font-size: 22px;
  padding: 10px;
}

.icon-div p {
  font-size: 18px;
  padding: 10px;
}


.added {
  display: none;
}

.modalConatiner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  /* z-index: 999; */
}

.modaldiv {
  color: white;
}

</style>
