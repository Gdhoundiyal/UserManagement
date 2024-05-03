<script setup>


</script>
<template>
    <div class="Container">
       
        <div class="search-box">
            <input placeholder="Search here.." class="search" />
            <div class="iconDiv">
                <i class="pi pi-search "></i>
            </div>
        </div>
    </div>
</template>

<style scoped>

.Container {
    padding: 0px 30px;
}

.search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #171717;
    padding: 11px 10px;
    border-radius: 5px;
}

.search {
    background-color: #171717;
    border: none;
    font-size: 14px;
    color: #878A92;
}
.pi-search {
   cursor: pointer;
}
input:focus {
    outline: none;
 
}
</style>