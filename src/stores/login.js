
import {defineStore} from 'pinia'

const token = localStorage.getItem('accessToken')
// console.log('from login store',token)

export const useloginStore = defineStore("Login",{
  state: () => ({
    userDetails: {
      username: '',
      password: ''
    },
    Authenticate: token,
    isloading: false,
    logoutbtn: false,
  }),
  getters: {},
 actions: {
  updateDetails(value){
    this.userDetails.username = value.username
    this.userDetails.password = value.password
  }
 }
})