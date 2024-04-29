import { defineStore } from "pinia";

export const useProfileStore  = defineStore('profile',{
    state:()=>({
        userdetails: {},
        mainUserDetails: null,
        editOpen : false
    }),
    actions: {
        updateUserdetails(data){
            this.userdetails = data
        },
        updatemainUserDetails(data){
            this.mainUserDetails = data
        },
        updateEditOpen(data){
            this.editOpen = data
        }
    },
})