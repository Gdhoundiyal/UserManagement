<script setup>
import Navscreen from './navbar/navscreen.vue';

</script>

<template>
    <div class="navcontainer">
        <Navscreen />
        <div class="userfeedcontainer" >
            <router-view/>
           
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