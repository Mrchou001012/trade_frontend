import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { AxiosInstance } from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'

// 创建 Axios 实例
const http: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000', // 基础 URL
  timeout: 10000, // 请求超时时间
})

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在请求发送之前做一些处理，比如添加 Token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`)
    }
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 对响应数据进行处理
    return response.data
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      const { status, data } = error.response
      console.error(`Error ${status}: ${data.message || 'Unknown error'}`)
    } else {
      console.error('Network error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default http