import { defineStore } from "pinia";

export const useNavstore = defineStore('nav',{
    state: ()=>({
        sectionName: "Home"
    }),
    getters: {},
    actions: {
        updatesectionName(name){
            console.log(name)
            this.sectionName = name
        }
    }
})