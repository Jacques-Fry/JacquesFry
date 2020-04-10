<template>
  <div class="About">
    <AppHead class="head" />

    <div class="content">
      <h2 class="content-title">
        关于此网站
        <i class="el-icon-info"></i>
      </h2>

      <el-divider>网站介绍</el-divider>
      <div class="content-text">
        <p>
          本网站为个人网站，不属于商用网站，域名hualeiyu.cn备案中。另外，此网站完全归属于
          <span @click="link()" class="link">花落泪知雨 ( Jacques·Fry )</span> 。开发起始日期为2020年1月6日，正式上线于2020年？月？日。
          开发此网站的最初目的是展示个人信息资料，寻求更多合作机会，保存和展示一些开发出的“新奇小玩意”，
          也有做项目练手增添开发经验的目的。此网站当前挂载在个人服务器里，同名微信公众号正在开发中。
        </p>

        <p>开发此网站需要具备的技术：Java、Spring、SpringBoot、MyBatics、Shiro、SpringDataJPA、Mogon、MySQL、Redis、RabbitMQ、JWT、SSO单点登录、JS、Vue、Vue脚手架全家桶（VueCLI4）、阿里巴巴短信验证、邮箱验证、CentOS服务器操作基础、Nginx、TomCat、Docker、DockerFile、...等等</p>

        <el-divider>疑问解答</el-divider>

        <p>声明：本网站结构样式均为原创，请勿抄袭！图片数据均来源于网络，如有侵权，请通知相关负责人删除。</p>

        <p>如有任何疑问或需要可联系负责人，联系方式如下：</p>
        <p>Mr.Sun</p>
        <p>Tel: 13025029601</p>
        <p>QQ: 1731439090</p>
        <p>邮箱: hualuoleizhiyu@163.com</p>
        <p>微信: 使用微信扫一扫，扫描页面底部二维码</p>

        <el-divider>END</el-divider>
      </div>
    </div>

    <div style="height:140px;"></div>
    <AppFoot class="foot" />
  </div>
</template>

<script type="text/javascript">
import AppHead from "views/pc/app/AppHead";
import AppFoot from "views/pc/app/AppFoot";

export default {
  name: "About",
  data() {
    return {};
  },
  components: { AppHead, AppFoot },
  methods: {
    link(){
      this.$router.push('/JacquesFry')
    }
  }
};
</script>

<style scoped>
.About {
  position: relative;

  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 1250px;

  background: url(~assets/img/about/background.jpg);
  background-size: cover;
}
.head {
  color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(255, 255, 255, 0.7);
}

.foot {
  color: #ffffff;
}

.content {
  margin-top: 20px;

  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-align: justify;

  width: 800px;
}
.content p {
  text-indent: 2em;
  line-height: 22px;
}

.content-title {
  /* color: #ffffff; */
}

.link {
  color: #2600ff;
  cursor: pointer;
}
.link:hover {
  text-decoration: underline;
}
</style>

