<script setup>
import { onMounted } from 'vue';
import Navscreen from './navbar/navscreen.vue';
import axios from 'axios';
import { BASE_URL } from '@/assets/assets';
import { useloginStore } from '@/stores/login';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import router from '@/router';

const loginstore = useloginStore()
const profileStore = useProfileStore()

const {mainUserDetails} = storeToRefs(profileStore)
const {Authenticate} = storeToRefs(loginstore)

 onMounted(()=>{
    // console.log("homepage rendered")
     if(mainUserDetails.value === null){
    axios.get(`${BASE_URL}profile`,{
        headers: {
      Authorization: `Bearer ${Authenticate.value}`
    }
    }).then((response)=>{
        profileStore.updatemainUserDetails(response.data)
    }).catch((error)=>{
        console.log(error)
        localStorage.clear()
        router.push('/')
    })
}

})
</script>

<template>
    <div class="navcontainer">
        <Navscreen />
        <div class="userfeedcontainer" >
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
.navcontainer{
    padding: 7px
}
.userfeedcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    overflow: scroll;
    height: 88vh;
    scrollbar-width: none;
}

</style>