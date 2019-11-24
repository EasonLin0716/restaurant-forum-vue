/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // 每個 Vue 元件都可以使用的資料
  state: {
    // 登入的使用者資訊
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    // 想要修改 state 的資料時，會在 mutations 裡設定函式
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        // 此時為預設值(空的)
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true (表示已登入)
      state.isAuthenticated = true
    },
    // 移除 token (登出功能)
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem('token')
    }
  },
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText } = await usersAPI.getCurrentUser()

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        commit('setCurrentUser', {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.image,
          isAdmin: data.isAdmin
        })
        return true
      } catch (error) {
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})
