<script setup>
import { useMessageStore } from '@/stores/Messages';
import { storeToRefs } from 'pinia';

const messagesStore = useMessageStore()
const {sendMsg}= storeToRefs(messagesStore)

console.log(sendMsg)

</script>

<template>
    <div>
messages
    </div>
</template>
