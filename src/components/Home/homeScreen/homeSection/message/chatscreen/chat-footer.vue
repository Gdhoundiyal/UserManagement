<script setup>
import { useMessageStore } from '@/stores/Messages';
import { ref } from 'vue';

const messageStore = useMessageStore()
const message = ref(null)

const sendMsg = () =>{
    const data =  {msg: message.value}
    console.log("footer", data)
   messageStore.updatedMsg(data, message.value)
   message.value = null
}
</script>
<template>
    <div class="Container">
        <div class="firstIconBox">
            <div class="optionicon" >
                <i class="pi pi-ellipsis-h"></i>
            </div>
            <div class="emoji">
                <i class="pi pi-face-smile"></i>
            </div>
        </div>
        <div class="Inputbox">
            
            <input placeholder="Type your messages..." class="Inputfield"  v-model="message"/>
        </div>
        <div class="lastIconBox">
            <div class="microphone">
                <i class="pi pi-microphone"></i>
            </div>
            <div class="send" @click="sendMsg">
                <i class="pi pi-send"></i>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Container {
    display: flex;
    width: 64%;
    justify-content: space-evenly;
    align-items: center;
    padding: 13px 8px;
    background-color: #202020b8;
    position: fixed;
    bottom: 5px;
    border-radius: 5px;
    gap: 20px;
    border-top: 1px solid black;
}
.firstIconBox{
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: 15px;
}

.Inputbox{
    flex: 1 0;
    background: #1d1c1c;
    border-radius: 5px;
}
.Inputfield{
    height: 36px;
    background: #0d0d0d;
    border: #383838;
    font-size: 15px;
    width: 100%;
    color: white;
    padding: 5px;
    border-radius: 6px;
}
input:focus {
    outline: none;
 
}
.pi{
    font-size: 17px
}
.pi-send{
    font-size: 20px;
    padding: 10px 10px 9px 10px;
    color: white;
    border-radius: 5px;
    background: green;
}

.lastIconBox{
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-right: 15px;
}

/* @media screen and (max-width: 990px) {
  .Container {
    width: 98vw;
  }
} */
</style>
