/**
 * Created by jiabinbin
 * 2018-06-01 17:27
 * Email jiabinbin@021.com
 */

// import util from 'util'

class Http {
  static f = '13214'

  constructor () {
    this.instance = null
  }

  static getInstance (params) {
    if (!this.instance) {
      this.instance = new Http(params)
    } else {
      return this.instance
    }
  }

  request () {
    return (option = {}) => {
      return new Promise((resolve, reject) => {
        option.success(res => {
          resolve(res)
        })
        option.fail(err => {
          reject(err)
        })
      })
    }
  }

  get () {}

  post () {}

  put () {}

  options () {}

  head () {}

  delete () {}

  trace () {}

  connet () {}
}

export default new Http().getInstance()
