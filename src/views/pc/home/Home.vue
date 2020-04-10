<template>
  <div class="Home">
    <AppHead class="head" />

    <HomeContent class="content" />

    <div style="height:140px;"></div>
    <AppFoot />

    <!-- <Snowflake /> -->

    <BackTop />
  </div>
</template>

<script type="text/javascript">
import { getIp } from "network/common.js";

import AppHead from "views/pc/app/AppHead";
import AppFoot from "views/pc/app/AppFoot";
import HomeContent from "./childComps/HomeContent";
// import Snowflake from "components/common/snowflake/Snowflake";

import BackTop from "components/common/backTop/BackTop";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { AppHead, HomeContent, AppFoot, BackTop },
  created() {},
  mounted() {}
};
</script>

<style scoped>
.Home {
  position: relative;

  height: 100%;
  width: 100%;

  min-width: 1250px;

  background: url(~assets/img/home/background.jpg) no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
}

.snowDown {
  animation: snowDown 3s linear infinite normal;
  -webkit-animation: snowDown 3s linear infinite normal;
  position: relative;
}
@keyframes snowDown {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: 30em;
  }
}

.head {
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.3);
}

/* .hello {
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center; 
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 1200px;
  height: 500px;
  background: url(~assets/img/winter-background.jpg) no-repeat;
  background-size: cover;
} */

.content {
  /* margin-top: 10px; */
  margin-bottom: 50px;
}
</style>


