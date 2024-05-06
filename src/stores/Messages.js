import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    sendMsg: [ 
    ],
    currentmsg: ''
  }),
  actions: {
    updatedMsg(data, currentvalue) {
      console.log("data from profile store", data )
      this.sendMsg.push(data);
      this.currentmsg = currentvalue
    },
  },
});
