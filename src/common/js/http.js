/**
 * Created by jiabinbin
 * 2018-06-01 16:57
 * Email jiabinbin@021.com
 */
import {Token} from './util'

const Fly = require('flyio/dist/npm/wx')
let axios = new Fly()

const DevBaseUrl = 'http://127.0.0.1:8000' //
const ProdBashUrl = 'http://127.0.0.1:8000' // 线上环境

let config = {
  baseURL: process.env.NODE_ENV !== 'production' ? DevBaseUrl : ProdBashUrl, // 配置API接口地址
  timeout: 10 * 60 * 1000,
  headers: {}
}

let token = Token.getToken()
if (token) {
  config.headers['Authorization'] = 'Bearer ' + token
}
//
axios.config.baseURL = config.baseURL
axios.config.timeout = config.timeout
axios.config.headers = config.headers
// axios.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (window) {
      let token = Token.getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export const login = (options) => {
  return axios.post('/user/login', options)
}

export const getUser = (options) => {
  return axios.post('/user/getUser', options)
}
