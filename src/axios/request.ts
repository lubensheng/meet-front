import { getToken } from '@/utils/user'
import axiosInstance from '.'

const Request = {
  addTokenByHeader(headers?: Record<string, any>) {
    const header = headers || {}
    header['access_token'] = getToken() || ''
    return header
  },

  get(url: string, params?: any, headers?: Record<string, any>) {
    return axiosInstance({
      method: 'get',
      params,
      headers: this.addTokenByHeader(headers),
      url
    })
  },

  post(url: string, params?: any, headers?: Record<string, any>) {
    return axiosInstance({
      method: 'post',
      data: params,
      headers: this.addTokenByHeader(headers),
      url
    })
  }
}

export default Request
