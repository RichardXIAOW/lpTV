<template>
    <UHeader class="border-gray-700 flex items-center" mode="modal" v-model:open="isOpen" autoClose>
        <template #title>
            <h1 class="text-lg font-semibold text-white">观影天下</h1>
        </template>

        <template #right>
            <UNavigationMenu :items="items" class="hidden md:flex" />
        </template>

        <template #body>
            <UNavigationMenu orientation="vertical" :items="items" class="-mx-2.5" />
        </template>
    </UHeader>
</template>
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
const route = useRoute()
const isOpen = ref(false)

const items = computed<NavigationMenuItem[]>(() => [
    {
        label: ' 首页',
        to: '/home',
        icon: 'i-lucide-sun',
        active: route.path.startsWith('/home')
    },
    {
        label: ' 搜索',
        to: '/search',
        icon: 'i-lucide-search',
        active: route.path.startsWith('/search')
    },
    {
        label: ' 我的',
        to: '/mine',
        icon: 'i-lucide-user',
        active: route.path.startsWith('/mine')
    }
])
</script>
