import { defineStore } from "pinia";

export const useProfileStore  = defineStore('profile',{
    state:()=>({
        userdetails: {
            name: "",
            email: "",
            profile: ""
        },
        mainUserDetails: null,
        editOpen : false
    }),
    actions: {
        updateUserdetails(name, email, profile){
            console.log(name, email, profile)
            // this.userdetails.name = data?.name
            // this.userdetails.email = data?.email
            // this.userdetails.profile = data?.profile
        },
        updatemainUserDetails(data){
            this.mainUserDetails = data
        },
        updateEditOpen(data){
            this.editOpen = data
        }
    },
})