<template>
    <UHeader class="border-gray-700 flex items-center" mode="modal">
        <template #title>
            <NuxtLink to="/home" class="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
                观影天下
            </NuxtLink>
        </template>

        <template #right>
            <UNavigationMenu :items="items" class="hidden md:flex" />
        </template>

        <template #body>
            <!-- 👇 关键：加 md:hidden 强制移动端默认隐藏 -->
            <UNavigationMenu orientation="vertical" :items="items" class="-mx-2.5" />
        </template>
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: '首页',
        to: '/home',
        icon: 'i-lucide-sun',
        active: route.path.startsWith('/home')
    },
    {
        label: '搜索',
        to: '/search',
        icon: 'i-lucide-search',
        active: route.path.startsWith('/search')
    },
    {
        label: '我的',
        to: '/mine',
        icon: 'i-lucide-user',
        active: route.path.startsWith('/mine')
    }
])
</script>