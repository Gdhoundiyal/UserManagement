<script setup>
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const store = useProfileStore()
const {userdetails} = storeToRefs(store)
console.log(userdetails.value)

</script>
<template>
    <div class="container">
      <div class="profilecontainer">
        <div class="profile">
          <div class="imagediv">
            <img
              class="profileimg"
              @click="imgViewModal"
              src="../../../../../../assets/adamzempa.jpg"
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
          <p v-else>  Andrew </p>
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
            <div class="follow">
                <p class="Editbtn" @click="openEdit">Follow</p>
                <p class="Editbtn" @click="openEdit">Message</p>
          <!-- <p class="Editbtn" @click="openEdit">Edit Profile</p> -->
        </div>
          <div v-if="openEditModal" class="modalContainer">
            <editModal v-click-outside="closeEditModal" />
          </div>
        </div>
        <userPost :user="user"/>
      </div>
</script>
<template>
    <div>
    {{ userdetails.name }}
    </div>
</template>

<style>

</style>