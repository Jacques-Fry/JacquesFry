<template>
  <div class="AppHead">
    <div class="link-box">
      <div class="link-box-left">
        <m-link class="link" link="/index">
          <div slot="vue-link">
            <!-- <i class="el-icon-s-home"></i> -->
            首页
          </div>
        </m-link>

        <!-- <m-link class="link" link="/download">
        <div slot="vue-link">-->
        <!-- <i class="el-icon-download"></i> -->
        <!-- 下载
        </div>
        </m-link>-->

        <m-link class="link" link="/JacquesFry">
          <div slot="vue-link">
            <!-- <i class="el-icon-star-on"></i> -->
            花落泪知雨
          </div>
        </m-link>

        <m-link class="link" link="http://129.204.232.85/musicplayer">
          <div slot="js-link">
            <!-- <i class="el-icon-question"></i> -->
            音乐站
          </div>
        </m-link>
        
        <m-link class="link" link="http://129.204.232.85/eflyketong">
          <div slot="js-link">
            <!-- <i class="el-icon-question"></i> -->
            eflyketong
          </div>
        </m-link>

        <m-link class="link" link="/about">
          <div slot="vue-link">
            <!-- <i class="el-icon-question"></i> -->
            关于本站
          </div>
        </m-link>
      </div>

      <div class="link-box-right">
        <m-link class="ico-link" link="https://github.com/Jacques-Fry/JacquesFry">
          <div slot="js-link">
            <img src="~assets/img/github/github.png" />
          </div>
        </m-link>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Link from "components/common/link/Link";

export default {
  name: "AppHead",
  components: { "m-link": Link },
  methods: {}
};
</script>

<style scoped>
.AppHead {
  position: relative;
  user-select: none;

  height: 49px;
  width: 100%;
  line-height: 49px;
}

.link-box {
  position: relative;
  display: flex;
  width: 100%;
}

.link-box-left {
  margin-left: 20px;
}

.link {
  display: inline-block;
  margin-right: 20px;
  vertical-align: middle;
  cursor: pointer;

  font-size: 20px;
  font-weight: 600;
}
.link:hover {
  color: #0e8bd3;
}

.link-box-right {
  position: absolute;
  right: 20px;
}

.ico-link {
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
}
.ico-link img {
  width: 100%;
  height: 100%;
}
.ico-link:hover {
  width: 45px;
  height: 45px;
}
</style>
