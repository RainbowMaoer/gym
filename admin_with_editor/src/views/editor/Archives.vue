<template>
  <div class="page-profile">
    <div class="left">
      <div class="avatar">
        <img src="../../assets/image/avatar1.jpg" class="img" />
      </div>
      <h3>个性签名: 可以褪色，可以枯萎</h3>
    </div>
    <div class="right">
      <div class="right-1">
        <div class="box">
          <img src="../../assets/image/avatar7.jpg" alt="" class="imgs" />
          <h3>Rainbow</h3>
        </div>
        <p> 运动太多和太少，同样的损伤体力；饮食过多与过少，同样的损伤健康；唯有适度可以产生、增进、保持体力和健康。(亚里士多德)</p>
        <p>在想的时候运动，耗的是一种兴致，在最适宜运动的时候运动，拼的就是一种余力，在不适宜运动的时候运动，靠的就是一种名叫挨摔的能力。</p>
      </div>
      <div class="right-2">
        <div class="box">
          <img src="../../assets/image/avatar5.png" alt="" class="imgs" />
          <h3>Cat</h3> 
        </div>
        <p>流水不腐，户枢不蠹，动也。（吕不韦） </p>
        <p>以自然之道，养自然之身．（欧阳修）</p>
        <p>运动的作用可以代替药物，但所有的药物都不能替代运动。（法国医学家——蒂素）</p>
      </div>
      <div class="right-3">
        <div class="box">
          <img src="../../assets/image/avatar14.jpg" alt="" class="imgs" />
          <h3>wenlan</h3>
        </div>
        <p>我生平喜欢步行，运动给我带来了无穷的乐趣。(爱因斯坦)</p>
        <p>身体虚弱，它将永远不全培养有活力的灵魂和智慧。（德国诗人——卢梭）</p>
        <p>一个埋头脑力劳动的人，如果不经常活动四肢，那是一件极其痛苦的事情。 (列夫·托尔斯泰)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     items: [],
  //   };
  // },
  methods: {
    // async fetch() {
    //   // const username = window.sessionStorage.getItem("username");
    //   const res = await this.$http.get("profile");
    //   this.items = res.data;
    //   console.log(this.items);
    // },
  },
  created() {
    // this.fetch();
  },
};
</script>

<style scoped>
.page-profile {
  display: flex;
  justify-content: space-between;
}

.page-profile .left {
  flex: 1;
  height: 780px;
  margin: 0 10px;
  text-align: center;
  background-color: #fff;
}

.avatar {
  margin: 80px auto;
}

.page-profile .right {
  display: flex;
  flex-flow: column;
  flex: 2;
  height: 780px;
  margin: 0 10px;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.right-1,
.right-2,
.right-3 {
  flex: 1;
  padding: 10px;
  background-color: #fff;
}

.right-2,
.right-3 {
  margin-top: 10px;
}

.imgs {
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  
}

.box {
  display: flex;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

h3 {
  margin-left: 10px;
}

p {
  text-indent: 2rem;
}
</style>
