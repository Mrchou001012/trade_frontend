<template>
    <a-card class="login-card" title="用户登录">
        <a-form :model="formData" @finish="onFinish" layout="vertical">
            <a-form-item name="username" label="用户名" :rules="[{ required: true, message: '请输入用户名' }]">
                <a-input v-model:value="formData.username" placeholder="Username" />
            </a-form-item>

            <a-form-item name="password" label="密码" :rules="[{ required: true, message: '请输入密码' }]">
                <a-input-password v-model:value="formData.password" placeholder="Password" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" html-type="submit" block :loading="loading">
                    登录
                </a-button>
            </a-form-item>
        </a-form>
    </a-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Form } from 'ant-design-vue'
import { authApi } from '@/services/api'

// 删除这一行：const [form] = Form.useForm()
// 如果需要表单实例，使用：
// const formRef = ref()

const formData = reactive({ username: '', password: '' })
const loading = ref(false)
const router = useRouter()

const onFinish = async () => {
    loading.value = true
    try {
        const res = await authApi.login({
            username: formData.username,
            password: formData.password
        })
        localStorage.setItem('token', res.token)
        router.push('/')
    } catch (err) {
        console.error('登录失败：', err)
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
.login-card {
    width: 360px;
    margin: 100px auto;
    padding: 24px;
}
</style>