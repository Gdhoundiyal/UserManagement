import { defineStore } from "pinia";

export const useProfileStore  = defineStore('profile',{
    state:()=>({
        userdetails: {}
    }),
    actions: {
        updateUserdetails(data){
            this.userdetails =data
        }
    },
})