const getToken = () => {
  let item = window.localStorage.getItem('userInfo')
  if (item) {
    item = JSON.parse(item)
    return (item as unknown as Record<string, any>).token
  }
  return null
}

const getUserInfo = () => {
  let item = window.localStorage.getItem('userInfo')
  if (item) {
    item = JSON.parse(item)
    return item as unknown as Record<string, any>
  }
  return null
}

export { getToken, getUserInfo }
