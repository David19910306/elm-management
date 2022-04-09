import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

const service: AxiosInstance = axios.create({
  timeout: 5000,
  withCredentials: true
})

// 添加请求的拦截器
service.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  // 一般会判断是否有请求的token，如果存在就return，不存在就加上，在返回
  if (service.defaults.headers.common['Authorization']) {
    return config
  } else {
    // 不存在请求的token
    // 一般正式项目开发需要加上情头的token
    // service.defaults.headers.common['Authorization'] = AUTH_TOKEN
    return config
  }
}, error => {
  // 错误的时候处理逻辑
  console.log(error)
})

// 添加响应的拦截器
service.interceptors.response.use((response: AxiosResponse<any>) => {
  // 一般是判断后台返回的状态是否为200
  const {status} = response
  return status === 200 ? Promise.resolve(response) : Promise.reject(response)
}, error => {
  console.log(error)
})

// 最后导出axios实例对象
export default service
