<template>
  <el-form
    ref="ruleFormRef"
    :rules="rules"
    :model="formInline"
    class="login-form"
    label-width="100px"
    label-position="right"
  >
    <el-form-item label="用户名：" class="custom-label">
      <el-input v-model="formInline.username" placeholder="请输入用户名" clearable />
    </el-form-item>
    <el-form-item label="密码：" class="custom-label">
      <el-input v-model="formInline.password" type="password" placeholder="请输入密码" clearable />
    </el-form-item>
    <div style="text-align: center">
      <el-button type="primary" @click="onSubmit(ruleFormRef)">登陆</el-button>
      <el-button @click="onSubmit">忘记密码</el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import useUserStore from '@/store/userInfo'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'

interface RuleForm {
  username: string
  password: string
}
const ruleFormRef = ref<FormInstance>()
const router = useRouter()
const rules = reactive<FormRules<RuleForm>>({
  username: {
    required: true,
    message: '请输入用户名'
  },
  password: {
    required: true,
    message: '请输入密码'
  }
})

const store = useUserStore()
const formInline = reactive({
  username: '',
  password: ''
})

const onSubmit = (form: FormInstance | undefined) => {
  form?.validate((valid) => {
    if (valid) {
      store.setLoading(true)
      store.setUserInfo(
        {
          username: formInline.username,
          password: formInline.password,
          token: formInline.username
        },
        () => {
          router.push('/meetManage')
        }
      )
    }
  })
}
</script>

<style scoped>
.login-form {
  width: 20%;
  margin: 0 auto;
  position: absolute;
  bottom: 300px;
  right: 70px;
}
.login-form .el-input {
  --el-input-width: 220px;
}

.login-form .el-select {
  --el-select-width: 220px;
}

.custom-label .el-form-item__label {
  color: #000 !important;
}
</style>
