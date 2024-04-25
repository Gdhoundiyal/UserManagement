<script setup>
import UserFeed from './homeSection/feed/user-feed.vue';
import Navscreen from './navbar/navscreen.vue';

const userDetails = [
    { name: "Andrew" },
    { name: "Emma" },
    { name: "James" },
    { name: "Olivia" },
    { name: "William" },
    { name: "Sophia" },
    { name: "Michael" },
    { name: "Isabella" },
    { name: "John" },
    { name: "Amelia" },
    { name: "Robert" },
    { name: "Charlotte" },
    { name: "David" },
    { name: "Mia" },
    { name: "Joseph" },
    { name: "Abigail" },
    { name: "Daniel" },
    { name: "Emily" },
    { name: "Matthew" },
    { name: "Harper" }
];
</script>

<template>
    <div class="navcontainer">
        <Navscreen/>
        <div class="userfeedcontainer" >
            <router-view />
        </div>
    </div>
</template>

<style>
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