<template>
    <div class="min-h-screen flex items-center justify-center p-4 bg-gray-900">
        <div class="w-full max-w-md">
            <!-- Logo -->
            <div class="text-center mb-8 flex flex-col items-center justify-center">
                <img src="~/assets/images/logo.png" alt="观影天下" class="w-36 h-36 mb-4">
                <h1 class="text-2xl font-bold text-white">观影天下</h1>
                <p class="text-gray-400 mt-2">影视技术学习平台</p>
            </div>

            <!-- 登录卡片 -->
            <UCard class="bg-gray-800 border-gray-700">
                <template #header>
                    <h2 class="text-lg font-semibold text-white text-center">用户登录</h2>
                </template>
                <UInput v-model="phone" placeholder="请输入手机号" class="w-full text-center" />
                <template #footer>
                    <UButton block @click="handleLogin">
                        确认登录
                    </UButton>
                </template>
            </UCard>
            <div class="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700 text-xs">
                <li>本平台仅提供影视技术学习资源分享，所有内容均来自互联网公开渠道。</li>
                <li class="mt-4">我们不拥有任何影视资源的版权，也不提供任何侵权内容。</li>
                <li class="mt-4">用户使用本平台即表示同意遵守相关法律法规，如有侵权请联系我们删除。</li>
                <li class="mt-4">登录即表示同意我们的服务条款和隐私政策</li>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
definePageMeta({
    layout: 'empty',
})
const router = useRouter()
const toast = useToast()

const phone = ref('')

const isPhoneValid = computed(() => {
    const phoneRegex = /^1[3-9]\d{9}$/
    return phoneRegex.test(phone.value)
})

const handleLogin = () => {
    if (!isPhoneValid.value) {
        toast.add({
            title: '错误',
            description: '请输入正确的手机号!',
            color: 'error',
        })
        return
    }
    // 存储手机号到 localStorage
    localStorage.setItem('iphoneNumber', phone.value)
    // 跳转首页
    router.replace('/home')
}
</script>