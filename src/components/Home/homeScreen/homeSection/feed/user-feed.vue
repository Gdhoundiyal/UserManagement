<script setup>

// import { ref } from 'vue';


// // Data from Parent Component //
// const props = defineProps(['name']);
// console.log(props.name)
// const name = ref(props.name);
// console.log(name)
const userDetails = [
    { name: "Andrew" },
    { name: "Emma" },
    { name: "James" },
    { name: "Olivia" },
    { name: "William" },
    { name: "Sophia" },
    { name: "Michael" },
    { name: "Isabella" },
    { name: "John" },
    { name: "Amelia" },
    { name: "Robert" },
    { name: "Charlotte" },
    { name: "David" },
    { name: "Mia" },
    { name: "Joseph" },
    { name: "Abigail" },
    { name: "Daniel" },
    { name: "Emily" },
    { name: "Matthew" },
    { name: "Harper" }
];

</script>

<template>
    <div v-for="(user, index) in userDetails" :key="index"  >
        <div >
        <div class="feedCont">
            <div class="user-feed">
                <div class="User-container">
                    <div class="User-box">
                        <div class="img-div">
                            <img src="../../../../../assets/adamzempa.jpg" alt="An Image of a Man" height="34px"
                                width="34px" class="image">
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
    </div>
    
</template>
<style>


.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    overflow: scroll;
    height: 88vh;
    scrollbar-width: none;

}

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