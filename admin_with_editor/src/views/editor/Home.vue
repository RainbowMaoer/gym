<template>
  <el-container style="height: 100vh">
    <img src="../../../../../img/yln.png" alt="" class="bgi" />
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <!-- unique-opened表示一次只能展开一个 -->
      <!-- :defalut-active="$route.path"根据路径来默认高亮 -->
      <el-menu router unique-opened :default-active="$route.path">
        <!-- <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>首页</template
          >
        </el-submenu> -->
        <el-menu-item index="/dashboards">
          <i class="el-icon-document"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>商品管理</template
          >
          <el-menu-item-group>
            <template slot="title">商品</template>
            <el-menu-item index="/kits/list">商品列表</el-menu-item>
            <el-menu-item index="/orders/list">我的订单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-message"></i>课程管理</template
          >
          <el-menu-item-group>
            <template slot="title">课程</template>
            <el-menu-item index="/curriculums/list">课程列表</el-menu-item>
            <el-menu-item index="/subscribe/list">我的预约</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 16px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button @click="$router.push('/archives')" class="setting">个人中心</el-button>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-button @click="$router.replace('/login')" class="setting">注销</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view></router-view>
        <!-- <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.bgi {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.setting {
  text-align: center;
  width: 100%;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>