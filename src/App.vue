<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import useUserStore from './store/userInfo'
import MenuView from './views/MenuView.vue'
import HomeView from './views/HeaderView.vue'
const store = useUserStore()
const router = useRouter()
window.addEventListener('beforeunload', () => {
  if (store.useInfo) {
    router.push('/meetManage')
  }
})
</script>

<template>
  <div>
    <div v-if="store.useInfo?.token" class="header">
      <HomeView />
    </div>
    <div class="container">
      <aside v-if="store.useInfo?.token" style="width: 150px; height: calc(100vh - 50px)">
        <MenuView />
      </aside>
      <div style="flex-grow: 2">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  width: 100vw;
  height: calc(100vh - 50px);
}
.header {
  height: 50px;
  width: 100%;
  line-height: 50px;
  background-color: #5875eb;
  color: #fff;
  display: flex;
  flex-direction: row-reverse;
}
</style>
