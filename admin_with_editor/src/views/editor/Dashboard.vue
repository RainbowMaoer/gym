<template>
  <div class="dashboard">
    <div class="slideshow">
      <h1 class="title">健身书籍推荐</h1>
      <el-carousel :interval="4000" type="card" height="360px">
        <el-carousel-item>
          <img src="../../../../../img/book1.jpg" alt="" class="imgs" />
          <p class="abstract">
            研究显示，与普通农产品相比，有机农产品中并没有更多的微量营养素。微量营养素的含量多少主要取决于农产品的品种，当然也受肥料、种植环境和其他一些因素的影响。其实，有机农产品最大的优点在于杀虫剂残余普遍较少。
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../../../img/book2.jpg" alt="" class="imgs" />
          <p class="abstract">
            脊髓的安全依赖脊柱的整体性，而脊柱的整体性又主要依赖于支撑脊柱的韧带与肌肉的健康。保护脊髓并使之保持健康的最好方式就是维持强壮的竖脊肌。可能除呼吸、健康饮食和规律睡眠之外，投入时间训练以保护脊柱是你能做的对健康最重要的事情。就是这样。
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../../../img/book3.jpg" alt="" class="imgs" />
          <p class="abstract">
            意识不产生于大脑的某一特定区域，其解释为是一个网状结构更为合理
            我们都会落在ADHD光谱的某一个位置，它能听到不同程度的内部噪音，这些噪音会干扰他们集中精神并损害这种能力。内部噪音越大越难集中注意力。抑制这种情况的是多巴胺的上升。
          </p>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../../../img/book4.jpg" alt="" class="imgs" />
          <p class="abstract">
            原则一：不吃白色的碳水化合物（包括那些经过加工后是别的颜色的）。
            原则二：按照同样的食谱，反复吃。 原则三：不通过饮料摄入卡路里。
            原则四：不吃水果。 原则五：一周挑一天让自己忘记以上四项原则。
          </p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="notice">
      <h1 class="title">健身房公告</h1>
      <div class="board">
        <p id="notice">
          健身房于2022年1月31日至2月7日暂停营业八天，给大家带来的不便敬请谅解，2月8日恢复正常营业。提前祝大家新年快乐！
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } */

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.title {
  text-align: center;
  font-size: 30px;
}

.imgs {
  float: right;
  height: 60%;
  margin: 50px 30px 0 30px;
}

.abstract {
  text-indent: 52px;
  font-size: 26px;
  margin-top: 70px;
  margin-left: 30px;
}

.board {
  width: 100%;
  height: 150px;
  background-color: #e7e3e3;
}

#notice {
  padding-top: 30px;
  font-size: 20px;
  text-indent: 40px;
  font-weight: 600;
}
</style>
