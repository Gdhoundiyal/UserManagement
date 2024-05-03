<script setup>
import { ref } from 'vue';


const message = ref(null)

const sendMsg = () =>{
    console.log("heiii", message)
   const msg = JSON.stringify( message.value) 
   console.log(msg)
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
    width: 67vw;
    justify-content: space-evenly;
    align-items: center;
    padding: 23px 15px 16px 15px;
    background-color: #343535b8;
    position: fixed;
    bottom: 0;
    gap: 20px;
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
    background: #262626;
    border-radius: 5px;
}
.Inputfield{
    height: 36px;
    border-bottom: #262626;
    background: #262626;
    border-right: #262626;
    font-size: 15px;
    width: 100%;
    color: #878A92;
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

@media screen and (max-width: 990px) {
  .Container {
    width: 98vw;
  }
}
</style>
