<template>
  <div
    class="h-screen w-screen flex justify-center"
    style="background-color: #2d3a4b;"
  >
    <div class="login-form w-96 pt-36">
      <h1 class="mb-10 text-white text-center text-2xl font-medium">
        CCOOL ADMIN
      </h1>
      <el-form
        :model="loginForm"
        :rules="rules"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="loginForm.userName"
            prefix-icon="User"
            size="large"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="Lock"
            type="password"
            size="large"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            size="large"
            style="width: 100%"
            @click="login"
          >
            LOGIN
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import routeConfig from '@/config/route'
import { useUser } from '@/store'

const user = useUser()

const loginForm = reactive({
  userName: 'admin',
  password: '123456'
})

const rules = {
  userName: {
    required: true,
    message: '用户名不能为空',
    trigger: 'change'
  },
  password: {
    required: true,
    message: '密码不能为空',
    trigger: 'change'
  }
}

const router = useRouter()
async function login () {
  await user.login(loginForm)
  router.push({
    name: routeConfig.homeName
  })
  location.reload()
}

</script>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style lang="less">
.login-form {
  .el-input__inner {
    color: #fff !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    background-color: transparent !important;
  }
}
</style>
