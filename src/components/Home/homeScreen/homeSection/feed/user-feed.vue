<script setup>

import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import userpost from './user-post.vue'

const store = useProfileStore()
const {editOpen } = storeToRefs(store)

// console.log("valuessssss",updateUserdetails,userdetails)

let openmod = ref(false)
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
    store.updateUserdetails({name: event.currentTarget.getAttribute('name') ,photoId: "kjhakjhsu98123hj345"})
}

// function openEdit(){
// //     console.log("clicked")
// //    store.updateEditOpen(true)
// openmod.value = true
// }

// const outside = () => {
//     openmod.value = false
// }

</script>

<template>
    <userpost v-for="(user, index) in userDetailsWithImage" :key="index" :user="user"/>
</template>
<style scoped >
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

.mediaImage{
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
</style>