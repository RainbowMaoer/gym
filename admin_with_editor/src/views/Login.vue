<template>
  <div class="login-container">
    <img src="../../../../img/img2.jpg" alt="" class="yln" />
    <el-card header="健身房系统" class="login-card">
      <!-- native表示监听表单的原生事件，prevent表示阻止默认事件，就是不让跳转 -->
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-radio v-model="model.roles" label="admin">管理员</el-radio>
          <el-radio v-model="model.roles" label="editor">普通用户</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" id="login"
            >login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      // 请求的时候把this.model也就是用户名和密码传上去
      const res = await this.$http.post("login", this.model);
      // sessionStorage浏览器关闭就会清除这个token
      // console.log(res.data);
      sessionStorage.token = res.data.token
      sessionStorage.username = res.data.username
      if (res.data.roles === 'admin') {
        this.$router.push('/')
      } else {
        this.$router.push('/dashboards')
      }
      this.$message({
        type: 'success',
        message: '登录成功'
      })
      // console.log(res.data);
    },
  },
};
</script>

<style>
.yln {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.login-card {
  width: 25rem;
  margin: 6rem auto;
  text-align: center;
  font-weight: 600;
  background-color: rgba(78, 39, 39, 0.5);
}

#login {
  width: 100%;
}
</style>
