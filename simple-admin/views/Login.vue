<template>
  <div class="login" label-width="100px">
    <div class="content">
      <p class="logo">logo</p>
      <p class="title">登录后台管理</p>
      <el-form class="form" ref="form" :model="formData">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-key" v-model="formData.password" show-password></el-input>
        </el-form-item>
        <div class="auto-login-wrap">
          <el-checkbox class="auto-login-wrap" v-model="isAutoLogin" label="1">自动登录</el-checkbox>
          <el-link href="" type="primary">忘记密码</el-link>
        </div>
        <el-form-item>
          <el-button class="submit-btn" type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      isAutoLogin: true,
      formData: {
        username: 'admin',
        password: '123456'
      }
    }
  },
  watch: {
    isAutoLogin(val) {
      console.log(val)
    }
  },
  methods: {
    onSubmit() {
      localStorage.setItem('token', 'token')
      this.$message({
        message: '登录成功',
        duration: 1200
      })
      setTimeout(() => {
        this.$router.push({ path: '/' })
      }, 1200)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  .content {
    box-sizing: border-box;
    width: 100%;
    max-width: 400px;
    padding: 10px 15px;
    text-align: center;
    // background-color: #fff;
    .logo {
      font-size: 3em;
    }
    .title {
      margin-top: 10px;
    }
    .form {
      width: 100%;
      margin-top: 20px;
      .auto-login-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .submit-btn {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
}
</style>
