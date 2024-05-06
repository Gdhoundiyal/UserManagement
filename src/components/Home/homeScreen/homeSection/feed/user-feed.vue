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
  { 
    name: "Andrew", 
    imageUrl: "https://source.unsplash.com/800x600/?nature,water", 
    profileimageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "A stunning view of nature and water. Enjoy the beauty of the outdoors." 
  },
  { 
    name: "Emma", 
    imageUrl: "https://source.unsplash.com/800x600/?technology", 
    profileimageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Cutting-edge technology and innovation. Explore the latest advancements." 
  },
  { 
    name: "James", 
    imageUrl: "https://source.unsplash.com/800x600/?architecture", 
    profileimageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    description: "Architectural marvels and urban landscapes. Discover the beauty of design." 
  },
  { 
    name: "Olivia", 
    imageUrl: "https://source.unsplash.com/800x600/?travel", 
    profileimageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Exciting travel destinations and breathtaking landscapes. Plan your next adventure." 
  },
  { 
    name: "William", 
    imageUrl: "https://source.unsplash.com/800x600/?food", 
    profileimageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Delicious food and culinary delights. Savor the flavors of gourmet cuisine." 
  },
  { 
    name: "Sophia", 
    imageUrl: "https://source.unsplash.com/800x600/?fashion", 
    profileimageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Fashion trends and style inspiration. Express your unique sense of fashion." 
  },
  { 
    name: "Michael", 
    imageUrl: "https://source.unsplash.com/800x600/?music", 
    profileimageUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "Soulful melodies and rhythmic beats. Experience the power of music." 
  },
  { 
    name: "Isabella", 
    imageUrl: "https://source.unsplash.com/800x600/?art", 
    profileimageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    description: "Creative expression and artistic vision. Immerse yourself in the world of art." 
  },
  { 
    name: "John", 
    imageUrl: "https://source.unsplash.com/800x600/?sports", 
    profileimageUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Athletic achievements and adrenaline-fueled action. Embrace the spirit of sports." 
  },
  { 
    name: "Amelia", 
    imageUrl: "https://source.unsplash.com/800x600/?animals", 
    profileimageUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    description: "Adorable animals and wildlife wonders. Connect with nature's furry friends." 
  },
];




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
    background-color: #1d1d1d;
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
    color: white;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 7px;
    margin-top: 10px;
}
</style>