<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#5875eb"
        class="el-menu"
        :default-active="key"
        text-color="#fff"
        @select="handleSelect"
        style="height: 100%"
      >
        <el-menu-item index="/meetManage">
          <el-icon><icon-menu /></el-icon>
          <span>会议室管理</span>
        </el-menu-item>
        <el-menu-item index="/bookingManagement">
          <el-icon><icon-menu /></el-icon>
          <span>预定管理</span>
        </el-menu-item>
        <el-menu-item index="/userManage">
          <el-icon><setting /></el-icon>
          <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="/statisticsView">
          <el-icon><icon-menu /></el-icon>
          <span>统计</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { watch, ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const activeKey = ref('/meetManage')
const router = useRouter()
const route = useRoute()
const handleSelect = (key: string) => {
  activeKey.value = key
  router.push(key)
}
watch(
  () => route.path,
  (value) => {
    activeKey.value = value
  }
)
const key = computed(() => {
  return activeKey.value
})
</script>

<style lang="css">
.tac {
  height: 100%;
}
</style>
