<script setup>

import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { object, string } from 'yup';

const store = useProfileStore()
const { editOpen, userdetails } = storeToRefs(store)



let openmod = ref(false)
// console.log("valuessssss",updateUserdetails,userdetails)

const userDetailsWithImage = [
    { name: "Andrew", imageUrl: "https://picsum.photos/200/300" },
    { name: "Emma", imageUrl: "https://picsum.photos/200/300" },
    { name: "James", imageUrl: "https://picsum.photos/200/300" },
    { name: "Olivia", imageUrl: "https://picsum.photos/200/300" },
    { name: "William", imageUrl: "https://picsum.photos/200/300" },
    { name: "Sophia", imageUrl: "https://picsum.photos/200/300" },
    { name: "Michael", imageUrl: "https://picsum.photos/200/300" },
    { name: "Isabella", imageUrl: "https://picsum.photos/200/300" },
    { name: "John", imageUrl: "https://picsum.photos/200/300" },
    { name: "Amelia", imageUrl: "https://picsum.photos/200/300" },

];

function sendData(event) {
    console.log(event.currentTarget.getAttribute('name'))
    store.updateUserdetails({ name: event.currentTarget.getAttribute('name'), photoId: "kjhakjhsu98123hj345" })
}

function openEdit() {
    console.log("clicked openEdit")
    //    store.updateEditOpen(true)
    openmod.value = true;
}

const outside = () => {
    console.log("clicked outside")
    openmod.value = false
}
const props = defineProps({
    user: object
}
)


console.log(props.user)
// console.log(props.user)

</script>

<template>

    <div>
        <div class="feedCont">
            <div class="user-feed">
                <div class="User-container">
                    <div class="User-box">
                        <div class="img-div">
                            <img src="../../../../../assets/adamzempa.jpg" alt="An Image of a Man" height="34px"
                                width="34px" class="image">
                            <div class="Status"></div>
                        </div>
                    </div>
                    <router-link  :to="{ name: 'user', params: { username: user.name }}" :name="user.name" @click="sendData" class="UserName">
                            <p>{{ props.user.name }}</p>
                        </router-link>
                
                </div>
                <div class="useroption">
                    <i class="pi pi-ellipsis-v option" @click="openEdit"></i>
                    <div v-if="openmod" class="logoutdiv" v-click-outside="outside">
                        <div class="logoutbtndiv">
                           
                            <p>Edit</p>
                            <p>Delete</p>
                           

                        </div>
                    </div>

                </div>

            </div>
            <div class="media-cont">

                <div class="media-box">
                    <img :src="user.imageUrl" alt="An Image of a Man" class="mediaImage"/>
                </div>
            </div>
            <div class="icon-box">
                <div class="piDiv">
                    <i class="pi pi-thumbs-up iconstyle">10</i>
                    
                </div>
                <div class="piDiv">
                    <i class="pi pi-comment iconstyle">4</i>
                </div>
                <div class="piDiv">
                    <i class="pi pi-share-alt iconstyle">2</i>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->

</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    overflow: scroll;
    height: 88vh;
    scrollbar-width: none;

}

.feedCont {
    width: 50vw;
    background-color: #3a3a3a;
    padding: 20px;
    margin: 8px 0;
    border-radius: 5px
}

.User-container {
    display: flex;
    align-items: center;
    margin: 2px 8px
}

.user-feed {
    display: flex;
    justify-content: space-between;
    align-items: center;

}
.UserName{
    text-decoration: none;
    color: #878a92
}
.User-box {
    display: flex;
    align-items: center;
    justify-content: center;
}

.option {
    font-size: 15px;
}

.img-div {
    margin-right: 10px;
    display: flex;
}


.image {
    border-radius: 50%;
}

.Status {
    height: 7px;
    width: 7px;
    background-color: green;
    border-radius: 50%;
    position: relative;
    top: 25px;
    right: 7px;
}

.media-cont {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid black  */
}

.media-box {
    height: 22rem;
    width: 90%;
    margin: 10px 0;
    border: 1px solid #898e8e;
    border-radius: 5px;
}

.mediaImage {
    height: 22rem;
    width: 100%;
    border-radius: 5px;
}

.icon-box {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.iconstyle {
    font-size: 22px
}

.piDiv {
    width: 5vw;
    color: #878a92;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 7px;
    margin-top: 10px;
}

.logoutdiv {
    position: relative;
}

.logoutbtndiv {
    border: 1px solid;
    position: absolute;
    height: 3.5rem;
    padding: 5px;
    left: -24px;
    z-index: 10;
    width: 3.5rem;
    background: #393941;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.editoption{
    display: flex; 
    justify-content: space-between;
    align-items: center
}
.editoption p{
    margin: 4px 2px;
    font-size: 14px
}

</style>