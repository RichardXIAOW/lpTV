<script setup lang="ts">
</script>

<template>
    <div class="flex h-screen bg-gray-900">
        <!-- 主内容区域 -->
        <div class="flex-1 flex flex-col overflow-hidden">
            <!-- 顶部导航栏 -->
            <AppHeader />
            <!-- 页面内容 -->
            <UContainer class="pt-6">
                <slot />
            </UContainer>
        </div>
    </div>
</template>
