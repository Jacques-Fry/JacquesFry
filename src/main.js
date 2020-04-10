import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import APlayer from '@moefe/vue-aplayer';

// element插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 音乐播放器
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});

// Echart图表插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// 粒子特效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import $ from "jquery"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
