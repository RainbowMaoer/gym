<template>
  <div>
    <h1>教练列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="250"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="avatar" label="头像">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" style="height: 5rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <!-- scope.row表示当前那一行的数据 -->
          <el-button
            type="primary"
            size="small"
            @click="$router.push(`/coaches/edit/${scope.row._id}`)"
            >编辑</el-button
          >
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
      const res = await this.$http.get("rest/coaches");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除教练 "${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(async () => {
        const res = await this.$http.delete(`rest/coaches/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!",
        });
        this.fetch();
      });
    },
  },
  created() {
    this.fetch();
  },
};
</script>
