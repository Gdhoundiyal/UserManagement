<script setup>
import chatlist from './chat_people/chatlist_header.vue'
import chatBody from './chat_people/chatlist_body.vue'

const userDetailsWithImage = [
{
    name: "John",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Emma",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Michael",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Sophia",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "William",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Olivia",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "James",
    imageUrl: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Isabella",
    imageUrl: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Benjamin",
    imageUrl: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Amelia",
    imageUrl: "https://randomuser.me/api/portraits/women/10.jpg"
  }

];
</script>

<template>
    <div class="container">
       <chatlist class="chatlist"/>
       <div class="chatbodylist">
           <chatBody v-for="(item, index) in userDetailsWithImage" :key="index" :userdetails="item"/>
        </div>
    </div>
</template>

<style scoped>
.container{
    width: 75%;
    background: #131313;
    border-radius: 5px;
    padding: 25px 10px 15px 10px;
}
.chatlist{
    margin-bottom: 20px;
}
.chatbodylist{
  
}
</style>