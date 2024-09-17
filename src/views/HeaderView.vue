<script lang="ts" setup>
import useUserStore from '@/store/userInfo'
const store = useUserStore()

const logout = (e: { preventDefault: () => void }) => {
  e.preventDefault()
  store.logout()
}
</script>

<template>
  <div class="header_container">
    <el-tooltip effect="dark" placement="bottom">
      <template #content>
        <a style="cursor: pointer" @click="logout">退出登录</a>
      </template>
      <span class="box-item">用户名： {{ store.useInfo?.username }}</span>
    </el-tooltip>
  </div>
</template>

<style lang="css">
.header_container {
  height: 100%;
}
.box-item {
  display: inline-block;
  margin-right: 16px;
}
</style>
