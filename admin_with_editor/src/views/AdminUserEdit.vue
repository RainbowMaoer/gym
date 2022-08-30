<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}管理员</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="角色">
        <el-radio v-model="model.roles" label="admin">管理员</el-radio>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="model.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="model.email"></el-input>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  // 接受编辑路由传来的参数,然后使用
  props: {
    id: {},
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    afterUpload(res) {
      // 换成vue自带的方法赋值  叫显示赋值
      // 三个参数分别是:要赋值的数据主体,要赋值的属性,要赋的值
      this.$set(this.model, 'avatar', res.url)
      // this.model.avatar = res.url
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        // 这里是像接口一样的写法,是吧异步回调的写法写成类似同步的方法
        res = await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      // 请求过来之后就把值赋上来显示出来
      this.model = res.data;
    },
  },
  created() {
    this.id && this.fetch();
  },
};
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  i.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
