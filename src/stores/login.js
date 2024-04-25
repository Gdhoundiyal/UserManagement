import {defineStore} from 'pinia'

export const useloginStore = defineStore("Login",{
  state: () => ({
    userDetails: {
      username: '',
      password: ''
    },
    Authenticate: false,
    isloading: false,
  }),
  getters: {},
 actions: {
  updateDetails(value){
    this.userDetails.username = value.username
    this.userDetails.password = value.password
    
  }
 }
})