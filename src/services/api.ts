import http from './http'

// 用户相关接口
// 示例接口：获取用户列表
export const getUsers = (params?: Record<string, any>) => {
  return http.get('/users', { params })
}

// 示例接口：获取用户详情
export const getUserById = (id: string) => {
  return http.get(`/users/${id}`)
}

// 示例接口：创建用户
export const createUser = (data: Record<string, any>) => {
  return http.post('/users', data)
}

// 示例接口：更新用户
export const updateUser = (id: string, data: Record<string, any>) => {
  return http.put(`/users/${id}`, data)
}

// 示例接口：删除用户
export const deleteUser = (id: string) => {
  return http.delete(`/users/${id}`)
}

// 身份验证相关接口
interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

// 身份验证 API 对象
export const authApi = {
  // 登录接口
  login: (data: LoginRequest) => {
    return http.post<LoginResponse>('/auth/login', data)
  },
  
  // 登出接口 (可选)
  logout: () => {
    return http.post('/auth/logout')
  },
  
  // 获取当前用户信息 (可选)
  getCurrentUser: () => {
    return http.get('/auth/me')
  }
}