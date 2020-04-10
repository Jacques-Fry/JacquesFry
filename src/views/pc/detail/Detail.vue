<template>
  <div class="Detail">
    <div class="data">
      <AppHead class="detail-head" />

      <DetailContent class="detail-content" />

      <div style="height:140px;"></div>

      <AppFoot class="detail-foot" />

      <BackTop />
    </div>

    <vue-particles
      id="particles-js"
      color="#fff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="star"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    ></vue-particles>
  </div>
</template>

<script type="text/javascript">
import AppHead from "views/pc/app/AppHead";
import AppFoot from "views/pc/app/AppFoot";

import DetailContent from "./childComps/DetailContent";

import BackTop from "components/common/backTop/BackTop";

export default {
  name: "Detail",
  data() {
    return {};
  },
  components: { AppHead, AppFoot, DetailContent, BackTop }
};
</script>

<style scoped>
.Detail {
  position: relative;

  height: 100%;
  min-height: 100vh;
  width: 100%;

  background: rgba(204, 232, 207);
  background: url(~assets/img/detail/background2.jpg);
  background-attachment: fixed;
  background-size: cover;
}

.data {
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  z-index: 2;
}

.detail-head {
  color: #fff;
  box-shadow: 0 0 2px 0 rgba(255, 255, 255, 0.7);
}

.detail-content {
  margin-top: 20px;
  margin-bottom: 50px;
}

.detail-foot {
  color: #ffffff;
}

#particles-js {
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
}
</style>
