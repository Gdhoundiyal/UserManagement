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
  <div  class="Chatcontainer">
    <chatheader :userdetails="props.userMessage"/>
  <Messagebox class="msgbox" />
 <chatfooter/>
  </div>
</template>

<style scoped>
.Chatcontainer{
  padding: 5px;
  width: 65.6vw;
  height: 100%;
  border-radius: 5px;
}
.msgbox{
  position: fixed;
    top: 162px;
    padding: 13px 8px;
    width: 64%;
    height: 61.7vh;

}
</style>
