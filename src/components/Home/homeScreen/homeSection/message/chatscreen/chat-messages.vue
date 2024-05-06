<script setup>
import { BASE_URL } from "@/assets/assets";
import { useMessageStore } from "@/stores/Messages";
import axios from "axios";
import { storeToRefs } from "pinia";
import { ref, onMounted, watch } from "vue";

const messagesStore = useMessageStore();
const { currentmsg } = storeToRefs(messagesStore);
const sendMsg = messagesStore.sendMsg;
const clientReply = ref(false);

const access_token = localStorage.getItem("accessToken");
// console.log(access_token)

console.log("reeeeerender", sendMsg);

watch(sendMsg, (newSendMsg) => {
  console.log("sendMsg", newSendMsg);
  console.log("currentmsg", currentmsg.value);
  try {
    axios
      .post(
        `${BASE_URL}send_message/1`,
        {
          content: currentmsg.value,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="msgcontainer">
    <div v-for="(item, index) in sendMsg" :key="index"  class="msgdiv" >
      <div class="chat-page">
        <p  :class="{ 'float-left': index % 2 === 0, 'float-right': index % 2 !== 0 }">
          {{ item.msg}} 
          <p class="click">  ✓</p>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.msgcontainer {
  overflow-y: auto;
  scrollbar-width: none;
  background-color: #131313;
  padding: 0px 8px 10px 8px; 
  display: flex;
  flex-direction: column;
}

.msgdiv {
  padding: 7px 10px;
  margin-top: auto;
}
.chat-page {
  padding: 0 0 35px 0;
}

.float-left{
  overflow: hidden;
  color: #b8b8b8;
  float: right;
  padding-right: 10px;
  display: flex;
  align-items: flex-end;
}
.float-right {
  overflow: hidden;
  float: left;
  color: #b8b8b8;
  padding-right: 10px;
  display: flex;
  align-items: flex-end;
}
.click{
    font-size: 12px;
    margin-left: 5px;
}
.msg-inboxleft {
  overflow: hidden;
  padding-left: 10px;
}
</style>
