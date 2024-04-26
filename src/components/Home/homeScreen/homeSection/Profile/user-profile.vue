<script setup>

// import CustomModal from '../../../../generalcomponents/modal.vue'
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const store = useProfileStore()
const {showModal} = storeToRefs(store)
console.log(showModal)


const userDetails = [
    { name: "Andrew" },
    { name: "Emma" },
    { name: "James" },
    { name: "Olivia" },
    { name: "William" },
    { name: "Sophia" },
];
// let showModal = false;

function openModal() {
    console.log("opening")
    showModal = true;
};
function closeModal() {
    showModal = false;
}

</script>

<template>
    <div class="container">
        <div class="profilecontainer">
            <div class="profile">
                <div class="imagediv">
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
                <p>Aderson Mathew</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    t
                    illum esse non quaerat minima nam.</p>
                <p>m rem officiis quam, voluptatum consequuntur? Qui amet
                    illum esse non quaerat minima nam.</p>
            </div>
            <div class="Editdiv">
                <p>Edit Profile</p>
            </div>
            <!-- <div>
                <b-button v-b-modal.modal-1>Launch demo modal</b-button>

                <b-modal id="modal-1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div> -->
            <!-- <div v-for="(user, index) in userDetails" :key="index">
                <div>
                    <div class="feedCont">
                        <div class="user-feed">
                            <div class="User-container">
                                <div class="User-box">
                                    <div class="img-div">
                                        <img src="../../../../../assets/adamzempa.jpg" alt="An Image of a Man"
                                            height="34px" width="34px" class="image">
                                        <div class="Status"></div>
                                    </div>
                                </div>
                                <p>{{ user.name }}</p>
                            </div>
                            <div class="useroption">
                                <i class="pi pi-ellipsis-v option"></i>
                            </div>
                        </div>
                        <div class="media-cont">
                            <div class="media-box"></div>
                        </div>
                        <div class="icon-box">
                            <div class="piDiv">
                                <i class="pi pi-heart iconstyle"></i>
                            </div>
                            <div class="piDiv">
                                <i class="pi pi-comment iconstyle"></i>
                            </div>
                            <div class="piDiv">
                                <i class="pi pi-share-alt iconstyle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
            <div>
                <div>
                    <button @click="openModal">Open Modal</button>
                    <p  v-if="showModal">Modal Content Goes Here</p>
                    <!-- <CustomModal v-if="showModal" @close="closeModal">
                        <button @click="closeModal">Close</button>
                    </CustomModal> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 60vw;
    height: auto;
    /* border: 1px solid white */
}

.profilecontainer {
    width: 53vw;
    padding: 20px;
    border: 1px solid #888;

}

.profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: 1px solid #888;

}

.following-post-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.following-post-div p {
    margin: 5px
}

.imagediv {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 20px;
    border: 1px solid white;
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
    border: 1px solid #888
}

.biodiv p {
    padding: 5px;

}

/* // Editdiv // */

.Editdiv {
    padding: 10px;
    border: 1px solid #888;
    text-align: center;
}

.Editdiv p {
    font-size: 15px
}

/* post section */

.feedCont {
    width: 50vw;
    background-color: #3a3a3a;
    padding: 20px;
    margin: 8px 0;
    border-radius: 5px
}

.User-container {
    display: flex;
    align-items: center;
    margin: 2px 8px
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
    font-size: 22px
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

 
</style>