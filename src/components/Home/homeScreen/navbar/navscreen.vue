<script setup>
</script>

<template>
    <div class="Navcont">
        <div class="sectionName">
            <!-- <i class="pi pi-align-justify"></i> -->
            <p>Section Name</p>
        </div>
        <div>
            <div class="imagediv">
                <img src="../../../../assets/adamzempa.jpg" alt="an image of a boy" height="45px" width="45px" class="image"/>
            </div>
        </div>
    </div>
</template>

<style>
.Navcont{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: 99%;
    height: 54px;
    background: #3a3a3c;
    border-radius: 5px;
}

.sectionName{
    padding: 10px;
    display: flex;
    align-items: center;
}
.sectionName p{
   font-size: 20px
}

.imagediv{
    padding: 10px;
    height: 8vh;
    width: 8vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image{
    border-radius: 5px;
}
</style>