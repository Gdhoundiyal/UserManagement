<script setup>
import chatheader from './chat-header.vue'
import chatfooter from './chat-footer.vue'
import Messagebox from './chat-messages.vue';
import { object } from 'yup';
import Messages from './chat-messages.vue';

const props = defineProps({
  userMessage: {}
})
console.log("userdatafrom props", props.userMessage)
</script>
<template>
  <div >
    <chatheader :userdetails="props.userMessage"/>
<Messagebox/>
 <chatfooter/>
  </div>
</template>

<style scoped></style>
