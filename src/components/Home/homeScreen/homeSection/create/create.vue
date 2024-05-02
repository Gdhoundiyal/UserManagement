<script setup>
import { ref } from "vue";
import router from "@/router";


let openmodal = ref(true)
const isloading = ref(false);
const imguploaded = ref(false);
const selectedPhoto = ref(null);



const selectDocument = (event) => {
    console.log("Event...." , event)
     const selectedFile = event.target.files[0];
    //  console.log("selectedFile", selectedFile)
      if (selectedFile) {
        selectedPhoto.value  = URL.createObjectURL(selectedFile);
        imguploaded.value= true
        console.log("Selected photo:", selectedPhoto.value);
        console.log("File type:", selectedFile.type);
      }
};

const uploadPost = () => {
    isloading.value = true
    setTimeout(() => {
        alert("post created successfully")
        isloading.value = false;
        openmodal.value = false;
        router.push('/Profile')
    }, 3000);
}

const outside = () => {
    console.log("worikign")
  openmodal.value = false
}
</script>3

<template>
  <div v-if="openmodal" class="modalContainer">
    <div    class="container "  v-click-outside="outside">
      <div class="header">
        <div class="Heading">Create a Post</div>
        <div class="Heading">
          <i class="pi pi-times"></i>
        </div>
      </div>
      <div class="line"></div>
      <div class="content">
        <div class="inputdiv">
          <textarea
            class="inputbox"
            name="message"
            rows="11"
            cols="45"
            placeholder="Write a Post..."
          ></textarea>
        </div>
        <div class="imagecontainer">
          <div class="imagediv">
            <img v-if="imguploaded" :src="selectedPhoto" alt="an image of user" height="184px" width="175px"/>
          </div>

          <div class="file">
            <label class="btn">
              Add Image
              <input type="file" accept="image/"  ref="imageInput"
              @change="(eve)=>selectDocument(eve, 'image')" style="display: none" />
            </label>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="buttonsdiv">
        <button v-if="isloading" class="btn btnspinner">
              <i class="pi pi-spin pi-spinner-dotted"></i>
            </button>
        <button v-else class="btn" @click="uploadPost">Post</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modalContainer{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  /* z-index: 999; */
}
.container {
  padding: 15px;
  margin-top: 2rem;
  width: 50vw;
  border-radius: 5px;
  border: 1px solid;
  background: #040505;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.Heading {
  font-size: 20px;
  font-weight: 300;
}

.line {
  height: 1px;
  width: 100%;
  margin: 25px 0px;
  background-color: #444;
}

.inputdiv {
  width: 50%;
}

.inputbox {
  background: #303030;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #757575;
}

.inputbox:focus {
  border: none;
}

.content {
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid;
  padding: 30px 0;
  border-radius: 5px;
}

.imagecontainer {
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.imagediv {
  height: 11.5rem;
  border: 1px solid;
  width: 11rem;
  border-radius: 5px;
  margin-bottom: 25px;
}

.buttonsdiv {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0 20px;
}


.btnspinner {
  padding: 5px;
}

.icons {
  display: flex;
  align-items: center;
}

.iconstyle {
  margin: 5px;
}

.btn {
  width: 5.5rem;
  padding: 9px;
  background-color: #6838cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.uploadimg {
  display: none;
}
</style>
