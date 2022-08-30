<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}商品</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="model.price"></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.picture" :src="model.picture" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="model.describe"></el-input>
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
    id: {}
  },
  data() {
    return {
      model: {},
    };
  },
  methods: {
    afterUpload(res) {
      // 换成vue自带的方法赋值 -> 显示赋值
      // 三个参数分别是:要赋值的数据主体,要赋值的属性,要赋的值
      this.$set(this.model, 'picture', res.url)
      // this.model.avatar = res.url
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/equipment/${this.id}`, this.model);
      } else {
        // 这里是像接口一样的写法,是吧异步回调的写法写成类似同步的方法
        res = await this.$http.post("rest/equipment", this.model);
      }
      this.$router.push("/equipment/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/equipment/${this.id}`);
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
    width: 15rem;
    height: 23rem;
    line-height: 23rem;
    text-align: center;
  }
  .avatar {
    width: 15rem;
    height: 23rem;
    display: block;
  }
</style>
