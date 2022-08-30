<template>
  <div>
    <h1>课程列表</h1>
    <div class="course-item" v-if="model">
      <div v-for="items in model" :key="items._id" class="course">
        <el-popover
          placement="bottom"
          title="课程时间"
          width="200"
          trigger="click"
          :content="items.time"
        >
          <img :src="items.coach.avatar" class="imgs" slot="reference" />
        </el-popover>

        <h3>课程名称: {{ items.name }}</h3>
        <p>教练名称: {{ items.coach.name }}</p>
        <p>教练手机号: {{items.coach.phone}}</p>
        <p>教练邮箱: {{items.coach.email}}</p>
        <button @click="save(items)">预约</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   id: { required: true },
  // },
  data() {
    return {
      model: null,
    };
  },
  methods: {
    async fetch() {
      const res = await this.$https.get(`curriculums/list`);
      this.model = res.data;
    },
    async save(items) {
      const res = await this.$https.post("subscribe", items);
      this.$router.push("/subscribe/list");
      this.$message({
        type: "success",
        message: "预约成功",
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style scoped>
.course-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.course {
  margin: 0 2rem 5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.imgs {
  width: 20rem;
  height: 20rem;
}

.course:hover {
  box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 0.2);
}

h3,
p {
  margin: 0;
}

button {
  width: 100%;
  padding: 1rem 0;
  font-size: 1rem;
  font-weight: 500;
  background-color: #5bc75b;
  border-radius: 5px;
  border: none;
}
</style>
