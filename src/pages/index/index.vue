<!--<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>
  </div>
</template>-->
<style scoped lang="scss" type="text/scss">
  @import "../../common/css/base.scss";
  @import "../../common/css/common.scss";

  .container {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;
  }

  /*.userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .usermotto {
    margin-top: 150px;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }*/
</style>


<template>
  <div class="container">
    <lTitle :text="topTitle"></lTitle>
    <div class="banner"></div>
    <div class="push">
      <div class="push-l"></div>
      <div class="push-m"></div>
      <div class="push-r"></div>
    </div>
    <div class="search"></div>
    <div class="category"></div>
    <div class="write">
      <button @click="getUserMsg">获得用户</button>
    </div>
    <div>
      <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">用户信息</button>
    </div>
  </div>
</template>

<script>
  import lTitle from '@/common/vue/littleTitle'
  import * as Api from '@/common/js/http'
  import { Token } from '@/common/js/util'

  export default {
    data () {
      return {
        topTitle: '热门',
        userInfo: {}
      }
    },

    components: {
      lTitle
    },

    methods: {
      bindViewTap () {
        const url = '../logs/main'
        wx.navigateTo({url})
      },
      clickHandle (msg, ev) {
        console.log('clickHandle:', msg, ev)
      },
      async onGotUserInfo (e) {
        // 调用登录接口
        console.log(e)
        console.log(e.mp.detail.errMsg)
        console.log(e.mp.detail.userInfo)
        console.log(e.mp.detail.rawData)
        if (e.mp.detail.userInfo) {
          let res = await Api.login({
            userName: 'tiancai',
            password: '123456'
          })
          console.log(res)
          if (res.data.result.token) {
            Token.setToken(res.data.result.token)
          }
        }
      },
      async getUserMsg () {
        let res = await Api.getUser()
        console.log(res)
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      // this.onGotUserInfo()
    }
  }
</script>
