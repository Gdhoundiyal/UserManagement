import { isBooleanAttr } from '@vue/shared'
import {defineStore} from 'pinia'

const token = localStorage.getItem('accessTOken')
console.log(isBooleanAttr(token))

export const useloginStore = defineStore("Login",{
  state: () => ({
    userDetails: {
      username: '',
      password: ''
    },
    Authenticate: token,
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