<template>
  <!--实时监测fps-->
  <FpsCounter />
  <!--主题切换-->
  <ThemeToggler />
  <!--关闭背景/点击效果-->
  <CloseTheme />
  <!--粒子特效-->
  <TsParticles v-show="newBackground" />
  <!--纸屑-->
  <ConfettiEffect v-show="newBackground" />

  <!--黑暗/明亮主题-->
  <lay-config-provider :theme="newTheme">
    <router-view />
  </lay-config-provider>

  <lay-tooltip position="left-start" content="返回顶部">
    <lay-backtop :bottom="180" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
  </lay-tooltip>
</template>

<script>
import WOW from 'wow.js';
import { mapState } from 'vuex';
import FpsCounter from './utils/FpsCounter.vue'
import ThemeToggler from './utils/ThemeToggler.vue';
import TsParticles from './utils/TsParticles.vue';
import ConfettiEffect from "@/utils/CanvasEffect.vue";
import CloseTheme from "@/utils/CloseTheme.vue";

export default {
  name: 'App',
  data() {
    return {
      newTheme: '',
      newBackground: true
    };
  },
  components: {
    CloseTheme,
    FpsCounter, ThemeToggler, TsParticles, ConfettiEffect
  },
  mounted() {
    new WOW({
      boxClass: "wow", // 需要执行动画的元素的class
      animateClass: "animate__animated", // 动画的class
      offset: 0, // 触发动画的滚动偏移量
      mobile: true, // 是否在移动设备上启用
      live: true, // 是否对动态添加的元素进行动画处理
      scrollContainer: null,
      resetAnimation: true,
    }).init();
  },
  computed: {
    ...mapState(['theme', 'background'])
  },
  watch: {
    theme(newThemeValue) {
      this.newTheme = newThemeValue;
    },
    background(newBackgroundValue) {
      this.newBackground = newBackgroundValue;
    }
  },
  created() {
    this.newTheme = this.theme;
    this.newBackground = this.background;
  }
}
// 使用防抖函数（debounce）来延迟处理 ResizeObserver 的回调函数，以避免频繁触发重排（reflow）或重绘（repaint）
const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 200);
    super(callback);
  }
};
</script>

<style>
@font-face {
  font-family: 'YunFengFeiYunTi';
  src: url('@/assets/fonts/YunFengFeiYunTi-2.ttf') format('woff');
  font-weight: normal;
  font-style: normal;
}
/* 定义滚动条的宽度 */
::-webkit-scrollbar {
  width: 8px;
}
/* 定义滚动条的轨道颜色 */
::-webkit-scrollbar-track {
  background-color: var(--border-color);
}
/* 定义滚动条的滑块颜色 */
::-webkit-scrollbar-thumb, ::-webkit-scrollbar-thumb:hover {
  background-color: var(--background-color);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border-radius: 20%;
}
</style>
