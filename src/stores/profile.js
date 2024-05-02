import { defineStore } from "pinia";

export const useProfileStore  = defineStore('profile',{
    state:()=>({
        userdetails: {
            name: "",
            email: "",
            profile: "",
            phone: "",
        },
        mainUserDetails: null,
        editOpen : false
        
    }),
    actions: {
        updateUserdetails(name, email, phone, profile){
            console.log(name, email, phone, profile)
            this.userdetails.name = name
            this.userdetails.email = email
            this.userdetails.phone = phone
            this.userdetails.profile = profile
        },
        updatemainUserDetails(data){
            this.mainUserDetails = data
        },
        updateEditOpen(data){
            this.editOpen = data
        }
    },
})