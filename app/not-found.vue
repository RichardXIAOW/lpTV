<template>
    <div>
        <UError :error="{
            statusCode: 404,
            statusMessage: 'Page not found',
            message: 'The page you are looking for does not exist.'
        }" />
    </div>
</template>

<script setup lang="ts">
// 404 页面未找到处理
</script>

<style lang="less" scoped></style>
