<script setup>
import { ref, watch } from "vue";
import userPost from "../feed/user-post.vue";
import imageModal from "./imageModal.vue";
import editModal from "./editModal.vue";
import { useProfileStore } from "@/stores/profile";


const profileStore = useProfileStore();
const name = ref(profileStore.userdetails.name);
const profile = ref(profileStore.userdetails.profile);
const openeditMOdal = ref(profileStore.editOpen);
console.log("openeditMOdal", openeditMOdal)

const openViewImg = ref(false);
const openEditModal = ref(false);
const updatedImg = ref(false);

const user = { name: "SHoleyky" };

watch(
  () => profileStore.userdetails.name,
  (newValue) => {
    name.value = newValue;
  }
);
watch(
  () => profileStore.userdetails.profile,
  (newValue) => {
    profile.value = newValue;
    updatedImg.value = true;
  }
);

watch(
    ()=> profileStore.editOpen,
    (newValue) => {
        openeditMOdal.value = false
    }
)


const imgViewModal = () => {
  openViewImg.value = true;
};

const closeImgModal = () => {
  openViewImg.value = false;
};

const openEdit = () => {
  openEditModal.value = true;
};
const closeEditModal = () => {
  openEditModal.value = false;
};
</script>

<template>
  <div class="container">
    <div class="profilecontainer">
      <div class="profile">
        <div class="imagediv">
          <img
            v-if="updatedImg"
            class="profileimg"
            @click="imgViewModal"
            :src="profile"
            alt="An Image of a Man"
            height="150px"
            width="150px"
          />
          <img
            v-else
            class="profileimg"
            @click="imgViewModal"
            src="../../../../../assets/userImg.jpg"
            alt="An Image of a Man"
            height="150px"
            width="150px"
          />

          <div v-if="openViewImg" class="modalContainer">
            <imageModal
              v-click-outside="closeImgModal"
              imagePath="image123.jpg"
            />
          </div>
        </div>
        <div class="following-post-div">
          <div class="post-div">
            <p class="postNum">10</p>
            <p class="posttext">Post</p>
          </div>
          <div class="following-div">
            <p class="followingNum">15</p>
            <p class="followingtext">following</p>
          </div>
          <div class="follower-div">
            <p class="followerNum">20</p>
            <p class="followertext">follower</p>
          </div>
        </div>
      </div>
      <div class="biodiv">
        <p v-if="updatedImg">{{ name }}</p>
        <p v-else>Aderson Mathew</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. t illum esse
          non quaerat minima nam.
        </p>
        <p>
          m rem officiis quam, voluptatum consequuntur? Qui amet illum esse non
          quaerat minima nam.
        </p>
      </div>
      <div class="Editdiv">
        <p class="Editbtn" @click="openEdit">Edit Profile</p>
        <div v-if="openEditModal" class="modalContainer">
          <editModal v-click-outside="closeEditModal" />
        </div>
      </div>
      <userPost :user="user" />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 60vw;
  height: auto;
  display: flex;
    justify-content: center;
}
.modalContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.62);
  /* z-index: 999; */
}
.profilecontainer {
  width: 53vw;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
}

.profile {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
}

.profileimg {
  border-radius: 50%;
}

.following-post-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.following-post-div p {
  margin: 5px;
}

.imagediv {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 1px solid white;
  background-color: #888;
}

.post-div,
.following-div,
.follower-div {
  height: 3rem;
  width: 5rem;
  margin: 10px;
}

.posttext,
.followingtext,
.followertext {
  font-size: 18px;
}

/* // biodiv // */

.biodiv {
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
}

.biodiv p {
  padding: 5px;
}

/* // Editdiv // */

.Editdiv {
  padding: 10px;
  border: 1px solid #888;
  text-align: center;
  border-radius: 5px;
}

.Editdiv p {
  font-size: 15px;
}
.Editbtn {
  padding: 9px;
  background-color: #6838cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* post section */

.feedCont {
  width: 50vw;
  background-color: #3a3a3a;
  padding: 20px;
  margin: 8px 0;
  border-radius: 5px;
}

.User-container {
  display: flex;
  align-items: center;
  margin: 2px 8px;
}

.user-feed {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.User-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.option {
  font-size: 15px;
}

.img-div {
  margin-right: 10px;
  display: flex;
}

.image {
  border-radius: 50%;
}

.Status {
  height: 7px;
  width: 7px;
  background-color: green;
  border-radius: 50%;
  position: relative;
  top: 25px;
  right: 7px;
}

.media-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black  */
}

.media-box {
  height: 22rem;
  width: 90%;
  margin: 10px 0;
  border: 1px solid #898e8e;
  border-radius: 5px;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.iconstyle {
  font-size: 22px;
}

.piDiv {
  width: 5vw;
  color: #878a92;
  border-radius: 4px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
  margin-top: 10px;
}

.modalbg {
  position: absolute;
  z-index: 999;
  top: 0%;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
}

.modal {
  position: relative;
  background: #fff;
  box-shadow: 0px, 10px, 5px, 2px rgb(0, 0, 0, 0.1);
}
</style>
