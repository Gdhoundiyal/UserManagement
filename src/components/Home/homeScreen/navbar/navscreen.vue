<script setup>
import { useRouter } from 'vue-router';
import { useloginStore } from '@/stores/login';
import { storeToRefs } from 'pinia';
import { useNavstore } from '@/stores/nav';


const store = useloginStore()
const { Authenticate, logoutbtn } = storeToRefs(store)
console.log('Authenticate', Authenticate)

// Nav Store //
const navStore = useNavstore()
let {sectionName} = storeToRefs(navStore)

const route = useRouter()


const logoutOn = () => {
    store.$patch((state)=>{
        state.logoutbtn = !state.logoutbtn
    })
   
}
const logout = () => {
    store.$patch((state)=>{
        state.logoutbtn = false
    })
    // localStorage.clear();
    // route.push('/')
    // console.log("logout",  Authenticate.value)
}
const outside = () => {
    store.$patch((state)=>{
        state.logoutbtn = false
    })
}
</script>

<template>
    <div class="Navcont" @click="logbtnoff">
        <div class="sectionName">
            <!-- <i class="pi pi-align-justify"></i> -->
            <p>{{sectionName}}</p>
        </div>
        
        <div>
            <div class="imagediv" @click="logoutOn">
                <img src="../../../../assets/userImg.jpg" alt="an image of a boy" height="45px" width="45px"
                    class="image" />
                <div>
                <div v-if="logoutbtn" class="logoutdiv">
                   <p @click="logout" v-click-outside="outside" class="logoutbtn">LogOut</p>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped >
.Navcont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 99%;
    height: 54px;
    background: #3a3a3c;
    border-radius: 5px;
}

.sectionName {
    padding: 10px;
    display: flex;
    align-items: center;
}

.sectionName p {
    font-size: 20px
}

.imagediv {
    display: flex;
    flex-direction: column;
   
    padding: 10px;
    height: 8vh;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    border-radius: 5px;
}

.logoutdiv{
    position: absolute;
}
.logoutbtn{
    position: relative;
    top: 10px;
    text-align: center;
    right: 31px;
    font-size: 14px;
    width: 4rem;
    padding: 4px;
    background-color: #6838cf;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}
</style>