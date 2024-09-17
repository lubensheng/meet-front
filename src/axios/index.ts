import axios from 'axios'
const baseURL = window.location.origin

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 1000
})

// axiosInstance.interceptors.response.use(
//   function (response) {
//     // 对响应数据做点什么
//     return response
//   },
//   function (error) {
//     // 对响应错误做点什么
//     // r如果是401 跳转到登录页面
//     return Promise.reject(error)
//   }
// )

export default axiosInstance
