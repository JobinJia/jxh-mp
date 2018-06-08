/**
 * Created by jiabinbin
 * 2018-06-01 18:45
 * Email jiabinbin@021.com
 */

/**
 * 将微信API转换成promise形式
 * 若想临时将一个微信的请求转成promise
 * 传入该方法即可 newName
 * @param apiName
 * @returns {function(*=, *=)}
 */
const wxPromise = (apiName) => {
  return (opts, newName = '') => {
    return new Promise((resolve, reject) => {
      opts.success = res => {
        resolve(res)
      }
      opts.error = err => {
        reject(err)
      }
      if (newName) {
        wx[newName](opts)
      } else {
        wx[apiName](opts)
      }
    })
  }
}

const API = {
  wxLogin: wxPromise('login'),
  wxGetUserInfo: wxPromise('getUserInfo'),
  wxRequest: wxPromise('request'),
  wxUploadFile: wxPromise('uploadFile')
}

export default {
  API: API,
  createPromise: wxPromise
}
