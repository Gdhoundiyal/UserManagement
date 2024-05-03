import { defineStore } from "pinia";

export const useMessageStore = defineStore('message',{
    state: ()=>({
        sendMsg: [{name: "hyyyy"}]
    }),
    actions:{
         updatedMsg (data){
            this.sendMsg.push(data)
        }
    }

})