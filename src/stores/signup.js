
import {defineStore} from 'pinia'

export const useSignupStore = defineStore("signup",{
    state: ()=> ({
        signupdetails: {
            username: "",
            email: "",
            password: "",
            phone_number: ""
        },
        isloading: false
    }),
    getters: {},
    actions: {
        updateSignupDetails(value){
            this.signupdetails.username = value.username
            this.signupdetails.email = value.email
            this.signupdetails.password = value.password
            this.signupdetails.phone_number = value.phone_number
        }
    }
})