/**
 * Created by jiabinbin
 * 2018-06-01 16:37
 * Email jiabinbin@021.com
 */

// export const Cookie = {
//   getsec: (expires) => {
//     return expires ? (Number(expires) * 60 * 60 * 1000) : (24 * 60 * 60 * 1000)
//   },
//   // 写 cookies
//   setCookie: (name, value, time) => {
//     if (time) {
//       let strsec = this.getsec(time)
//       let exp = new Date()
//       exp.setTime(exp.getTime() + parseInt(strsec))
//       document.cookie = name +
//         '=' +
//         escape(value) +
//         ';expires=' +
//         exp.toGMTString()
//     } else {
//       document.cookie = name + '=' + escape(value)
//     }
//   },
//   // 读
//   getCookie: (name) => {
//     let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
//     let arr = document.cookie.match(reg)
//     return arr ? unescape(arr[2]) : null
//   },
//   // 删除
//   delCookie: (name) => {
//     let exp = new Date()
//     exp.setTime(exp.getTime() - 1)
//     let cval = this.getCookie(name)
//     if (cval != null) {
//       document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
//     }
//   }
// }

export const Token = {
  getToken: () => {
    // if (window.sessionStorage && window.sessionStorage.Bearer) {
    //   return window.sessionStorage.Bearer
    // } else if (window.localStorage && window.localStorage.Bearer) {
    //   return window.localStorage.Bearer
    // }
    //
    return wx.getStorageSync('Bearer')
  },
  setToken: (token, rememberTime) => {
    wx.setStorageSync('Bearer', token)
    // if (window.sessionStorage) {
    //   window.sessionStorage.Bearer = token
    // }
    //
    // if ((rememberTime && window.localStorage) || !window.sessionStorage) {
    //   window.localStorage.Bearer = token
    // }
    //
    // if (window.document.cookie && !window.sessionStorage && !window.localStorage) {
    //   if (rememberTime) {
    //     Cookie.setCookie('Bearer', token, rememberTime)
    //   } else {
    //     Cookie.setCookie('Bearer', token)
    //   }
    // }
  },
  delToken: () => {
    // if (window.sessionStorage && window.sessionStorage.Bearer) {
    //   window.sessionStorage.removeItem('Bearer')
    // }
    //
    // if (window.localStorage && window.localStorage.Bearer) {
    //   window.localStorage.removeItem('Bearer')
    // }
    //
    // if (window.document.cookie) {
    //   Cookie.delCookie('Bearer')
    // }
  }
}
