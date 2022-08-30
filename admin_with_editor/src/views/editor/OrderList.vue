<template>
  <div>
    <h1>订单列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
          <!-- <button @click="btnClick(scope)">按钮</button> -->
          <img :src="scope.row.picture" alt="" style="height: 5rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      const res = await this.$https.get("orders");
      // console.log(res);
      console.log(res.data);
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除订单 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$https.delete(`orders/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
    // btnClick(scope) {
    //   console.log(scope.row.goods.picture);
    // }
  },
  created() {
    this.fetch();
  },
};
</script>
