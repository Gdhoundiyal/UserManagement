<script setup>
import colors from '@/assets/colors';
console.log(colors)

</script>

<template>
    <div class="container">
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
    </div>
</template>

<style scoped>
.container {
    width: 65vw;
    height: auto;
    /* border: 1px solid white */
}

.profile {
    width: 55vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border: #888;
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
.followertext{
  font-size: 18px;

}
</style>