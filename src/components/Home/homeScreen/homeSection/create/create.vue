<script setup>

</script>

<template>
    <div>
        <div class="container">
            <div class="Heading">Create a Post</div>
            <div class="line"></div>
            <div class="content">
                <div class="inputdiv">
                    <textarea class="inputbox" name="message" rows="11" cols="45"
                        placeholder="Write a Post..."></textarea>
                </div>
                <div class="imagecontainer">
                    <div class="imagediv"></div>
                    <button class="btn">Add Image</button>
                </div>
            </div>
            <div class="line"></div>
            <div class="buttonsdiv">
                <button class="btn"> Post </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    padding: 15px;
    margin-top: 2rem;
    width: 50vw;
    border-radius: 5px;
    border: 1px solid;
}


.Heading {
    font-size: 20px;
    font-weight: 300;
}

.line {
    height: 1px;
    width: 100%;
    margin: 25px 0px;
    background-color: #444
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
.imagediv{
    height: 11.5rem;
    border: 1px solid;
    width: 11rem;
    border-radius: 5px;
    margin-bottom: 10px;
}
.buttonsdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 0 20px;
}

.icons {
    display: flex;
    align-items: center;
}

.iconstyle {
    margin: 5px
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
</style>