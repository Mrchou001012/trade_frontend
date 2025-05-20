import http from './http'

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