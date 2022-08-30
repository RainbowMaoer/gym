<template>
  <el-container style="height: 100vh">
    <img src="../../../../img/img2.jpg" alt="" class="yln" />
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <!-- unique-opened表示一次只能展开一个 -->
      <!-- :defalut-active="$route.path"根据路径来默认高亮 -->
      <el-menu router unique-opened :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-message"></i>成员管理</template
          >
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">用户</template>
            <el-menu-item index="/users/create">新建用户</el-menu-item>
            <el-menu-item index="/users/list">用户列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">教练</template>
            <el-menu-item index="/coaches/create">新建教练</el-menu-item>
            <el-menu-item index="/coaches/list">教练列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-menu"></i>商品管理</template
          >
          <el-menu-item-group>
            <template slot="title">商品</template>
            <el-menu-item index="/equipment/create">新建商品</el-menu-item>
            <el-menu-item index="/equipment/list">商品列表</el-menu-item>
            <el-menu-item index="/orders1/list">订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-menu"></i>课程管理</template
          >
          <el-menu-item-group>
            <template slot="title">课程</template>
            <el-menu-item index="/courses/create">新建课程</el-menu-item>
            <el-menu-item index="/courses/list">课程列表</el-menu-item>
            <el-menu-item index="/subscribe1/list">课程预约列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button @click="$router.push('/profile')" class="setting">个人中心</el-button>
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

<script>
export default {
  // methods: {
  //   logout() {
  //     sessionStorage.removeItem('token')
  //     this.$router.push('/login')
  //     this.$message({
  //       type: 'success',
  //       message: '退出成功'
  //     })
  //   }
  // },
}
</script>

<style>
.setting {
  text-align: center;
  width: 100%;
}

.yln {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
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