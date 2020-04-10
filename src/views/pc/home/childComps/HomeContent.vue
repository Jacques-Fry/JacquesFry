<template>
  <div class="HomeContent">
    <!-- <HomeTextEffect :textList="textList" /> -->

    <HomeSwiper :imgList="imgList" />

    <div class="source">
      <el-link
        href="http://pic.netbian.com/"
        :underline="false"
        target="_blank"
        style="color:#ffffff"
      >图片素材来源: 彼岸图网 http://pic.netbian.com</el-link>
    </div>

    <HomeCard />

    <HomeEchart class="echart" />
  </div>
</template>

<script type="text/javascript">
import { getIp } from "network/common.js";

import HomeSwiper from "components/content/swiper/HomeSwiper";
import HomeTextEffect from "components/content/textEffect/HomeTextEffect";
import HomeEchart from "components/content/echart/HomeEchart";
import HomeCard from "components/content/card/HomeCard";

export default {
  name: "HomeContent",
  data() {
    return {
      ipAddress: {
        country: "中国",
        region: "北京市",
        city: "",
        isp: ""
      },
      textList: [
        "",
        '欢迎来到 <span style="color: blue;">花落泪知雨</span> 的个人网站',
        "天冷了，请记得多穿件衣服",
        "新的一年即将到来，在这里提前祝你",
        '<span style="color:red">新年快乐!!!</span>'
      ],
      imgList: [
        {
          img: require("assets/img/home/img8.jpg"),
          title: "塞尔达传说：旷野之息",
          context: "勇气不需回忆，只因其不曾忘却"
        },
        {
          img: require("assets/img/home/img7.jpg"),
          title: "精灵与萤火意志",
          context: "让奥里在光芒中涅槃,书写新的纪元"
        },
        {
          img: require("assets/img/home/img12.jpg"),
          title: "巫师三：狂猎",
          context: "邪恶就是邪恶，没有大小中之分。罪恶的界限因人而异，变幻莫测。如果要我从两种罪恶中选其一，我宁可不做选择"
        },
        {
          img: require("assets/img/home/img10.jpg"),
          title: "荒野大镖客：救赎2",
          context: "复仇是蠢人的游戏"
        }
      ]
    };
  },
  components: {
    HomeSwiper,
    HomeTextEffect,
    HomeEchart,
    HomeCard
  },
  created() {
    // this.getAddress();
  },
  methods: {
    getAddress() {
      getIp().then(res => {
        if (res && res.code === 200) {
          this.ipAddress = res.data;
        }
        this.textList.splice(
          0,
          1,
          '你好，来自 <a target="_blank" href="https://map.baidu.com/"><i class="el-icon-map-location"></i></a><span style="color: red;">' +
            this.ipAddress.region +
            " " +
            this.ipAddress.city +
            "</span> 的朋友"
        );
      });
    }
  }
};
</script>

<style scoped>
.HomeContent {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 1250px;
}
.source {
  margin-top: 5px;
  text-align: center;

  width: 100%;
  font-size: 14px;
}

.source-link {
  color: #ffffff;
}

.echart {
  margin-top: 30px;
}
</style>
