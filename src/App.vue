<template>
  <!--实时监测fps-->
  <FpsCounter />
  <!--主题切换-->
  <ThemeToggler />
  <!--粒子特效-->
  <TsParticles />
  <!--纸屑-->
  <ConfettiEffect />

  <!--黑暗/明亮主题-->
  <lay-config-provider :theme="newTheme">
    <router-view />
  </lay-config-provider>

  <lay-tooltip position="left-start" content="返回顶部">
    <lay-backtop :bottom="150" circle size="small" bgcolor="#5FB878" iconSize="22" icon="layui-icon-top" ></lay-backtop>
  </lay-tooltip>
</template>

<script>
import WOW from 'wow.js';
import { mapState } from 'vuex';
import FpsCounter from './utils/FpsCounter.vue'
import ThemeToggler from './utils/ThemeToggler.vue';
import TsParticles from './utils/TsParticles.vue';
import ConfettiEffect from "@/utils/ConfettiEffect.vue";

export default {
  name: 'App',
  data() {
    return {
      newTheme: ''
    };
  },
  components: {
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
    ...mapState(['theme'])
  },
  watch: {
    theme(newThemeValue) {
      this.newTheme = newThemeValue;
    }
  },
  created() {
    this.newTheme = this.theme;
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
