<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- 音乐播放器 -->
    <aplayer
      class="aplayer"
      ref="aplayer"
      :audio="musicList"
      :lrcType="0"
      fixed
      @empetied="musicEmpetied"
      @error="musicError"
    />
  </div>
</template>
<script  type="text/javascript">
export default {
  name: "app",
  data() {
    return {
      musicList: [
        {
          name: "平凡天使",
          artist: " G.E.M.邓紫棋",
          url: require("assets/music/平凡天使.mp3"),
          theme: "#7178e8",
          cover:
            "https://p2.music.126.net/8JkfznEa_qqASaJvUIicyw==/109951164784376724.jpg"
        },
        {
          name: "烟火里的尘埃",
          artist: " 华晨宇",
          url: require("assets/music/烟火里的尘埃.mp3"),
          theme: "#22bd2f",
          cover:
            "https://p1.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg"
        }

        // {
        //   name: "The Sacrifice",
        //   artist: " Gareth Coker &  Aeralie Brighton",
        //   url:
        //     "http://m8.music.126.net/20200123222823/a12d4123e84a4b73eca1395602363cde/ymusic/f9e3/28a9/56df/4dbff50e6b2ee91300443eac95fd10f7.mp3",
        //   theme: "#f349e9",
        //   cover:
        //     "https://p1.music.126.net/AnovD9sKn0RmUR6Ya4MPDQ==/109951163509831033.jpg"
        // },

        // {
        //   name: "Never Our Fault",
        //   artist: " Lucas Estrada",
        //   url:
        //     "http://m7.music.126.net/20200123213858/b1e3ff5b3c60f03aef98838df3a99133/ymusic/13d8/1270/fe2a/ffe5aedb5ccb2ed0121cee777a0fd044.mp3",
        //   theme: "#27dba3",
        //   cover:
        //     "https://p1.music.126.net/PCnXAOppvjlJVDLr2ZLZ8A==/109951163606362747.jpg"
        // }
      ]
    };
  },
  components: {},
  methods: {
    //音乐暂停
    musicPause() {
      this.$refs.aplayer.pause();
    },
    //音乐播放错误
    musicEmpetied() {
      this.$message({
        showClose: true,
        message: "音乐文件故障",
        type: "error"
      });
      //下一首
      this.$refs.aplayer.skipForward();
      window.setTimeout(() => {
        this.$refs.aplayer.play();
      }, 100);
    },
    //音乐加载异常
    musicError() {
      this.$message({
        showClose: true,
        message: "音乐加载异常",
        type: "error"
      });
      //下一首
      this.$refs.aplayer.skipForward(0);
      window.setTimeout(() => {
        this.$refs.aplayer.play();
      }, 100);
    }
  }
};
</script>
<style>
@import "assets/css/normalize.css";
</style>
<style scoped>
#app {
  position: relative;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  min-width: 1250px;
}

.aplayer {
  z-index: 3;
}
</style>
