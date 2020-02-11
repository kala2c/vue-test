<template>
  <div class="login" label-width="100px">
    <h2>一套简易后台模板</h2>
    <el-form class="form" ref="form" :model="formData">
      <el-form-item label="用户名">
        <el-input prefix-icon="el-icon-user" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input prefix-icon="el-icon-key" v-model="formData.password"></el-input>
      </el-form-item>
    </el-form>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .form {
    width: 300px;
    padding-bottom: 100px;
  }
}
</style>
