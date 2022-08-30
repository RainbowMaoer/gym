<template>
  <div>
    <h1>{{ id ? "编辑" : "新建" }}课程</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="课程名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            value-format="yyyy-MM-dd-HH:mm:ss"
            v-model="model.time"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          >
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="教练">
        <el-select v-model="model.coach">
          <el-option
            v-for="item in coach"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
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
      coach: [],
      model: {},
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2022, 1, 1, 0, 0), new Date(2022, 1, 1, 0, 0)],
      value2: "",
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/courses/${this.id}`, this.model);
      } else {
        // 这里是像接口一样的写法,是吧异步回调的写法写成类似同步的方法
        res = await this.$http.post("rest/courses", this.model);
      }
      this.$router.push("/courses/list");
      this.$message({
        type: "success",
        message: "保存成功",
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/courses/${this.id}`);
      // 请求过来之后就把值赋上来显示出来
      this.model = res.data;
    },
    async fetchCoach() {
      const res = await this.$http.get(`rest/coaches`);
      // 请求过来之后就把值赋上来显示出来
      this.coach = res.data;
    },
  },
  created() {
    this.fetchCoach();
    this.id && this.fetch();
  },
};
</script>
