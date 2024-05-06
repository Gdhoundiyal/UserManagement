<template>
   <img class="modalprofileimg"src="../../../../../assets/adamzempa.jpg" alt="An Image of a Man" height="300px" width="300px">
</template>

<script setup>
import { string } from 'yup';

const props = defineProps({
    imagePath: string
})
console.log("imagepath",props.imagePath)
</script>

<style scoped>
.modalprofileimg{
    border-radius: 5px;
    margin: 0 100px 150px 0;
}
</style>