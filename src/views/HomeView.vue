<script setup lang="ts">
import useUserStore from '@/store/userInfo'
import { computed } from 'vue'
import LoginView from './LoginView.vue'
import image from '@/assets/login.png'
const store = useUserStore()

const loading = computed(() => {
  return store.loading
})
</script>

<template>
  <div class="main_container">
    <div v-if="store.useInfo?.token">已经登陆</div>
    <div
      v-else
      :style="{
        height: '100%',
        width: '100%',
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }"
    >
      <el-container
        style="height: 100%; width: 100%"
        element-loading-text="正在登录"
        v-loading="loading"
      >
        <el-main style="height: 100%; width: 100%">
          <LoginView />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style scoped>
.main_container {
  width: 100%;
  height: 100%;
}
</style>
