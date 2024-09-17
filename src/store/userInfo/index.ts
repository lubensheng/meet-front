import type { UserInfo } from './type'
import { getUserInfo } from './service'
import { defineStore } from 'pinia'

const useUserStore = defineStore('userInfo', {
  state() {
    let item = window.localStorage.getItem('userInfo')
    if (item) {
      item = JSON.parse(item)
    }
    return {
      useInfo: (item ? item : null) as null | UserInfo,
      loading: false as boolean
    }
  },
  getters: {
    getUserInfo(state) {
      return state.useInfo
    },
    getLoading(state) {
      return state.loading
    }
  },
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    },
    async setUserInfo(payload: UserInfo, callback?: () => void) {
      if (this.useInfo) {
        return
      }
      const ans = await getUserInfo(payload)
      this.useInfo = ans
      this.loading = false
      window.localStorage.setItem('userInfo', JSON.stringify(ans))
      callback?.()
    },
    logout() {
      this.useInfo = null
      window.localStorage.setItem('userInfo', '')
    }
  }
})

export default useUserStore
