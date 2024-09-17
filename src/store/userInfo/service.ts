import Request from '@/axios/request'
import type { UserInfo } from './type'

const getUserInfo = (userInfo: UserInfo): Promise<UserInfo> => {
  Request.post('/userServer/login', {
    username: userInfo.username,
    password: userInfo.password
  }).then(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    }
  )

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userInfo)
    }, 1000000)
  })
}

export { getUserInfo }
