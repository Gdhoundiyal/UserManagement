<script setup>
import { useProfileStore } from '@/stores/profile';
import { storeToRefs } from 'pinia';

const store = useProfileStore()
const {userdetails} = storeToRefs(store)
console.log(userdetails.value)

</script>
<template>
    <div>
    {{ userdetails.name }}
    </div>
</template>

<style>

</style>