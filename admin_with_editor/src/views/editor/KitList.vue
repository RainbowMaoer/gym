<template>
  <div>
    <h1>商品列表</h1>
    <div class="goods-item" v-if="model">
      <div v-for="goods in model" :key="goods._id" class="goods">
        <el-popover
          placement="bottom"
          title="器材描述"
          width="200"
          trigger="click"
          :content="goods.describe"
        >
          <img :src="goods.picture" class="imgs" slot="reference" />
        </el-popover>

        <h3>器材名称: {{ goods.name }}</h3>
        <p>价格: {{ goods.price }}</p>
        <button @click="save(goods)">购买</button>
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
      model: null
    };
  },
  methods: {
    async fetch() {
      const res = await this.$https.get(`kits/list`);
      this.model = res.data;
    },
    async save(goods) {
      const username = window.sessionStorage.getItem("username");
      // console.log(username);
      const res = await this.$https.post("orders", {...goods, username});
      console.log(res);
      this.$router.push("/orders/list");
      this.$message({
        type: "success",
        message: "购买成功",
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>

<style scoped>
.goods-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.goods {
  margin: 0 2rem 5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.imgs {
  width: 14rem;
  height: 20rem;
}

.goods:hover {
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
