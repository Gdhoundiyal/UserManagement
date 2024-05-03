<script setup>

const props = defineProps({
  userdetails:{}
})

console.log(props.userdetails.name)
</script>

<template>
  <div class="Container">
    <div class="img-div">
          <img
            :src="props.userdetails.imageUrl"
            alt="An Image of a Man"
            height="50px"
            width="50px"
            class="image"
          />
        </div>
        <!-- <p>{{props.usedetails.name}}</p> -->
        <router-link :to="{name: 'userMessage', params: {userMessage:JSON.stringify( props.userdetails)}}" class="Name" >
    <div class="User-container">
      
        <p>{{props.userdetails.name}}</p>
        
        <div class="msgtime">
          <div>17:40</div>
          <div>2</div>
        </div>
      </div>
    </router-link >
    </div>
</template>

<style scoped>
.Container {
  padding: 15px 30px;
 border-bottom: 1px solid #3f3e3e;
  display: flex;

}
.Container:hover {
  background-color: #424242;   
}

.header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
}

.User-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2px 8px;
  

}
.User-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.pi-plus {
  font-size: 12px;
  padding: 5px;
  background-color: #151a16;
}

.img-div {
  margin-right: 10px;
  display: flex;
}

.image {
  border-radius: 50%;
}

.Name{
  text-decoration: none;
  color: #cecccc;
  font-size: 18px;
  width: 100%;
  padding: 10px;
}

.msgtime{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.msgtime div{
  font-size: 11px;
}
</style>
