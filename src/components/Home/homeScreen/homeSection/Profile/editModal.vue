<script setup>
import { ref } from 'vue';
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';
import axios from 'axios';
import { BASE_URL } from '@/assets/assets';

const profileStore = useProfileStore()
const {userdetails, updateUserdetails} = storeToRefs(profileStore)


const selectedPhoto = ref(null)
const name = ref("")
const email = ref("")
const profile = ref("")
const isloading = ref(false)

const uploadImg = (event) => {

const selectedImg = event.target.files[0]
const imagePath = URL.createObjectURL(selectedImg)
profile.value = imagePath
// console.log(selectedImg.name, imagePath)

selectedPhoto.value  = imagePath
// console.log("selectedImg",selectedImg.name)

}

const updateProfile = async () => {
isloading.value = true
// console.log(name.value, email.value, profile.value)

profileStore.updateUserdetails(name.value, email.value, profile.value);

// const response = await axios.put(`${BASE_URL}`)

}

</script>

<template>
  <div class="modalprofileupdate">
    <div class="Container">
      <div class="imagediv">
        <div>
          <img v-if="selectedPhoto" :src="selectedPhoto" alt="an image of user" height="154px" width="155px"  class="profileimg"/>

          <img v-else
            class="profileimg"
            @click="imgViewModal"
            src="../../../../../assets/userImg.jpg"
            alt="An Image of a Man"
            height="150px"
            width="150px"
          />
        </div>
        <label class="btn "
          >Upload profile
          <input
            type="file"
            ref="imageInput"
            accept="image/*"
            @change="(event) => uploadImg(event, 'image')"
            style="display: none"
        /></label>
      </div>
    
      <div class="inputSection">
        <div class="inputbox">
          <div class="inputname">Name :</div>
          <input class="input" type="text" placeholder="Joaseph" v-model="name" />
        </div>
        <div class="inputbox">
          <div class="inputname">Email :</div>
          <input class="input" type="text" placeholder="Example@123" v-model="email" />
        </div>
      </div>
      <div class="btnSection">
        <button v-if="isloading" class="btn btnspinner">
              <i class="pi pi-spin pi-spinner-dotted"></i>
            </button>
        <button v-else class="btn update" @click="updateProfile"
          >Update
          </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modalprofileupdate {
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 450px;
  background: #211f1f;
  padding: 30px 10px;
}
.Container {
  border-radius: 5px;
  padding: 10px;
  padding: 15px 0;
}

.imagediv {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 15px;
}
.profileimg {
  border-radius: 50%;
  margin-bottom: 10px;
}
.inputbox {
  display: flex;
  padding: 10px;
  border: 1px solid;
  background: #5c5c57;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
}
.inputSection {
  margin-bottom: 15px;
}
.input {
  background: #5c5c57;
  color: white;
  border: #5c5c57;
  padding: 3px 0 0 0;
  margin-left: 14px;
  font-size: 14px;
}
.input:focus {
  border: none;
  outline: none;
}

input::placeholder {
  color: white;
}
.btnSection {
  margin-top: 25px;
}
.btn {
  padding: 10px;
  background-color: #6838cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btnspinner {
  padding: 5px;
  width: 100%;
  height: 33px
}
.update {
  width: 100%;
}
</style>
