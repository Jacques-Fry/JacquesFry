<template>
  <div class="AppFoot">
    <div class="foot-msg">
      <div class="link-box">
        <div class="link">© 2020-2021 最终解释权归花落泪知雨所有</div>
        <br />
        <div class="link">邮箱: hualuoleizhiyu@163.com</div>
        <br />
        <div class="link">QQ: 1731439090</div>
        <div class="link">3085332160</div>
        <br />
        <div class="link">微信: 请使用微信扫一扫 扫描右方二维码</div>
      </div>
    </div>

    <div class="line"></div>

    <div class="qr-code">
      <div class="img">
        <div class="wechat"></div>
        <div class="tag">微信号</div>
      </div>
      <div class="img">
        <div class="weChat-official-account"></div>
        <div class="tag">微信公众号</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "AppFoot",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.AppFoot {
  position: absolute;
  bottom: 0;
  display: flex;

  width: 100%;
  height: 140px;

}

.line {
  width: 1px;
  border-left: 1px solid #000000;

  margin-bottom: 10px;
}

.link-box {
  display: inline-block;
  text-align: left;
}

.qr-code {
  text-align: left;
  flex: 1;
  margin-left: 20px;
  margin-top: 10px;
}
.qr-code .img {
  display: inline-block;
  text-align: center;
  margin-right: 10px;
}
.qr-code .img .tag {
  margin-top: 5px;
  font-size: 14px;
}
.wechat {
  border-radius: 7px;

  height: 98px;
  width: 98px;

  border: 1px solid rgba(87, 87, 87, 0.3);
  background: url(~assets/img/wechat/WeChat.jpg) no-repeat;
  background-size: cover;
}
.weChat-official-account {
  border-radius: 7px;

  height: 100px;
  width: 274px;
  background: url(~assets/img/wechat/WeChatOfficialAccount.jpg) no-repeat;
  background-size: cover;
}

.foot-msg {
  flex: 1;
  text-align: right;
  margin-right: 20px;
  margin-top: 10px;

  font-size: 14px;
}

.link {
  display: inline-block;
  margin-left: 20px;
  /* cursor: pointer; */
  line-height: 25px;
}
</style>
