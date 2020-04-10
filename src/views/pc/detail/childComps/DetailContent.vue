<template>
  <div class="DetailContent">
    <DetailFont />
    <div class="content">
      <div class="head-portrait">
        <el-avatar
          class="img-thumbnail rounded"
          F
          shape="square"
          :size="150"
          fit="cover"
          :src="headPortrait"
        ></el-avatar>
      </div>

      <div class="data-content">
        <div class="data-1 data">
          <div>姓名：花落泪知雨</div>

          <div>性别：男</div>

          <div>
            家乡：
            <i class="el-icon-map-location link" @click="openMap('12598432,3567921.75,13z')"></i>湖北省 天门市
          </div>

          <div>爱好：音乐、电影、游戏</div>

          <div>邮箱： jacquesfry@qq.com</div>
        </div>
        <div class="data-2 data">
          <div>英文名：Jacques·Fry</div>

          <div>生日：4月14日</div>

          <div>
            当前所在地：
            <i class="el-icon-map-location link" @click="openMap('13437130,3228867.25,12z')"></i>浙江省 温州市
          </div>

          <div>擅长： 网站后端开发</div>

          <div>
            GitHub主页：
            <mlink link="https://github.com/Jacques-Fry">
              <span class="link" slot="js-link">https://github.com/Jacques-Fry</span>
            </mlink>
          </div>
        </div>
      </div>

      <div class="icon">
        <DetailFont2 />
      </div>
    </div>

    <div class="game-show">
      <h2 class="white">
        <i class="el-icon-menu"></i>
        游戏展区
      </h2>
      <el-divider></el-divider>
      <DetailCard :cardList="individualityList" />
    </div>
  </div>
</template>

<script type="text/javascript">
import DetailFont from "components/content/font/DetailFont";
import DetailFont2 from "components/content/font/DetailFont2";

import DetailCard from "components/content/card/DetailCard";

import mlink from "components/common/link/Link";

export default {
  name: "DetailContent",
  data() {
    return {
      headPortrait: require("assets/img/detail/headportrait.jpg"),
      individualityList: [
        {
          img: require("assets/img/detail/card/img3.jpg"),
          title: "Breath of the Wild",
          context:
            "《塞尔达传说：旷野之息》（Breath of the Wild）是由任天堂企划制作本部与子公司Monolith Soft协力研发制作的一款开放世界动作冒险游戏。于2017年3月3日由任天堂发行，为《塞尔达传说》系列游戏正统续作的第15部作品。2019年6月12日，在任天堂E3展前发布会上官方公开了该作续作的首个宣传片，并正在开发中。",
          url: "https://store.nintendo.com.hk/70010000009367"
        },
        {
          img: require("assets/img/detail/card/img2.jpg"),
          title: "Ori and the Will of the Wisps",
          context:
            "《精灵与萤火意志》（Ori and the Will of the Wisps）本作是广受好评的动作类平台游戏《精灵与森林》的续篇，由原班制作团队倾心打造，备受期待。投身满是新朋友和敌人的广大世界，享受令人惊艳的手绘画面，踏上全新的冒险之旅。除了契合游戏的原创音乐之外，《精灵与萤火意志》也延续了 Moon Studios 的风格：精心制作的平台动作游戏和深情的叙事手法。",
          url:
            "https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/"
        },
        {
          img: require("assets/img/detail/card/img4.jpg"),
          title: "Red Dead Redemption 2",
          context:
            "《荒野大镖客2》（Red Dead Redemption 2）简称RDR2，是Rockstar San Diego工作室制作，Rockstar公司发行的一款以美国西部拓荒史为题材的动作冒险类开放世界游戏，为2010年该公司发行的《Red Dead Redemption》的正统续作。",
          url:
            "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
        },
        {
          img: require("assets/img/detail/card/img1.jpg"),
          title: "Star Wars Jedi：Fallen Order",
          context:
            "《星球大战绝地：陨落的武士团》（Star Wars Jedi：Fallen Orde）由《泰坦陨落》厂商重生工作室带来的星战新作，本作故事介于星球大战电影第三部《星球大战：西斯的复仇》与第四部《星球大战：新希望》之间，故事为工作室原创。",
          url: "https://store.steampowered.com/app/1172380/_/"
        },
        {
          img: require("assets/img/detail/card/img5.jpg"),
          title: "Cyberpunk 2077",
          context:
            "《赛博朋克2077》（Cyberpunk 2077）是知名游戏《巫师》系列开发商CD Projekt RED开发制作的一款角色扮演游戏。故事设定在黑暗腐败、科技高度发达的未来世界中，并且兼有沙盒元素与RPG机制。该款游戏于2019年6月在E3游戏展展出。游戏预计于2020年4月16日正式发售。",
          url: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/"
        },
        {
          img: require("assets/img/detail/card/img6.jpg"),
          title: "Call of Duty: Modern Warfare",
          context:
            "《使命召唤：现代战争》（Call of Duty: Modern Warfare）是一款由Infinity Ward开发，动视发行的第一人称射击游戏，是使命召唤游戏系列第16部作品，也是使命召唤“现代战争”系列的重启之作。本作将于2019年10月25日正式发售，登陆PS4、Xbox One及PC平台，其中PC版本由战网独占。《使命召唤：现代战争》荣获了2019年TGA最佳音效设计奖项。"
        },
        {
          img: require("assets/img/detail/card/img7.jpg"),
          title: "SEKIRO: Shadows Die Twice",
          context:
            "《只狼：影逝二度》（SEKIRO: Shadows Die Twice）已在2019年3月22日全球发布，对应游戏平台为 PS4、Xbox One、与 PC，并支持中文版。2019年12月13日，《只狼：影逝二度》获得TGA 2019年度游戏。",
          url:
            "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/"
        },
        {
          img: require("assets/img/detail/card/img8.jpg"),
          title: "Control",
          context:
            "《控制》(Control)是一款由芬兰游戏公司绿美迪娱乐开发并由505 Games发行在PS4/Xbox/PC等平台上的第三人称动作冒险游戏，由Remedy Entertainment开发制作，505 Games发行，pc端于2019年8月27日登陆，steam预计为2020年8月上架。《控制》荣获了2019年TGA最佳美术指导奖项。",
          url: "https://www.epicgames.com/store/zh-CN/product/control/home"
        },
        {
          img: require("assets/img/detail/card/img9.jpg"),
          title: "Death Stranding",
          context:
            "《死亡搁浅》（Death Stranding）是小岛秀夫邀请好友吉尔莫·德尔·托罗参与的开放世界游戏，登陆于PlayStation 4平台，是著名游戏制作人小岛秀夫以及旗下工作室小岛制作从科乐美独立之后发表的首款作品。本作是开放世界风格的动作互动游戏，玩家既能享受到探索的自由度，也能体验到小岛秀夫游戏一贯的剧情要素，同时游戏还将提供在线内容。《死亡搁浅》荣获了2019年TGA最佳游戏指导、最佳原声/音乐奖项。",
          url: "https://store.steampowered.com/app/1190460/Death_Stranding/"
        },
        {
          img: require("assets/img/detail/card/img10.jpg"),
          title: "Devil May Cry 5",
          context:
            "《鬼泣5》（Devil May Cry 5）是由日本CAPCOM开发的一款动作冒险游戏，该作是《鬼泣》系列第六部，且是《鬼泣4》的正统续作，故事发生在《鬼泣4》之后，于2019年3月8日发售，登陆PC、PS4和XBOX One平台。《鬼泣五》荣获了2019年TGA最佳动作游戏奖项。",
          url: "https://store.steampowered.com/app/601150/Devil_May_Cry_5/"
        },
        {
          img: require("assets/img/detail/card/img11.jpg"),
          title: "BIOHAZARD RE:2",
          context:
            "《生化危机2：重制版》（ BIOHAZARD RE:2）是著名日本生存恐怖类电子游戏《生化危机》系列的作品之一，是1998年游戏《生化危机2》的重制版本，Capcom公司开发并发行。将登陆PlayStation 4、Xbox One和PC平台，使用《生化危机7》同款引擎RE Engine打造，经典的生存恐怖游戏正式重生。",
          url:
            "https://store.steampowered.com/app/883710/RESIDENT_EVIL_2__BIOHAZARD_RE2/"
        },
        {
          img: require("assets/img/detail/card/img12.jpg"),
          title: "Borderlands 3",
          context:
            "《无主之地3》（Borderlands 3）是一款由Gearbox Software开发，2K Games发行的RPG风格的FPS射击游戏，是2012年游戏《无主之地2》的正统续作。该作将于2019年9月13日正式发售，登陆PS4、Xbox One与PC平台，并支持中文语音与字幕。",
          url:
            "https://www.epicgames.com/store/zh-CN/product/borderlands-3/home"
        },
        {
          img: require("assets/img/detail/card/img13.jpg"),
          title: "Astral Chain",
          context:
            "《异界锁链》（Astral Chain）是任天堂公司发行的动作游戏，白金工作室开发制作。2019年8月30日在Nintendo Switch平台独占推出。由Platinum Games Inc.参与开发，支持中文。本作由神谷英树监督，桂正和负责人设，《尼尔 机械纪元》主设计师田浦贵久执导。本作以未来城市Ark为舞台。",
          url: "https://store.nintendo.com.hk/70010000022478"
        },
        {
          img: require("assets/img/detail/card/img14.jpg"),
          title: "Octopath Traveler",
          context:
            "《八方旅人》（Octopath Traveler）角色扮演游戏，2018年7月13日登陆任天堂NS平台，现登陆ns和pc平台。由任天堂公司负责国际发行， Square Enix 负责日本发行。本作由Square Enix、Acquire，及制作TRPG的FarEast Amusement Research共同制作。游戏采用虚幻4引擎打造，画面采用结合复古像素点阵与3DCG的风格。《八方旅人》IGN评分9.3。",
          url: "https://store.nintendo.com.hk/70010000021223"
        },
        {
          img: require("assets/img/detail/card/img15.jpg"),
          title: "Xenoblade 2",
          context:
            "《异度神剑2》（Xenoblade 2）是任天堂游戏公司出版发行的开放世界角色扮演游戏。由MONOLITH SOFT制作，2017年12月1日独占登录NS主机。支持简繁中文，中文版于17年12月1日同步推出。由《异度装甲》与《灵光守护者》制作人高桥哲哉领军制作。剧情以云海世界为舞台，叙述莱克斯与焰/光结伴寻找人类终极天堂乐园的奇幻冒险。",
          url: "https://store.nintendo.com.hk/70010000009647"
        }
      ]
    };
  },
  components: { DetailFont, DetailFont2, DetailCard, mlink },
  methods: {
    openMap(address) {
      window.open("https://map.baidu.com/@" + address);
    }
  }
};
</script>

<style scoped>
.DetailContent {
  margin-left: 40px;
}

.nav {
  width: 300px;
}

.content {
  display: flex;
  color: #fff;
}

.head-portrait {
  text-align: right;
  margin-right: 40px;
}

.data-content {
  flex: 1;
  display: flex;
  text-align: left;

  font-size: 14px;
}

.content .icon {
  flex: 1;
}

.data-2 {
  margin-left: 20px;
}

.data div {
  line-height: 30px;
}

.head-portrait,
.data-content {
  padding-top: 20px;
}

.link {
  cursor: pointer;
}

.link:hover {
  color: rgb(0, 119, 255);
}

.white {
  color: #ffffff;
}

.game-show {
  margin-top: 20px;
}
</style>
