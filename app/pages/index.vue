<template>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'empty',
})
onMounted(() => {
    const iphoneNumber = localStorage.getItem('iphoneNumber')
    if (iphoneNumber) {
        navigateTo('/home', { replace: true })
    } else {
        navigateTo('/login', { replace: true })
    }
})
</script>

<style lang="less" scoped>
/* Your styles here */
</style>
