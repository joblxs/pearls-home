<template>
  <!--实时监测fps-->
  <FpsCounter />
  <!--主题切换-->
  <ThemeToggler ref="theme" />

  <!--黑暗/明亮主题-->
  <lay-config-provider :theme="theme.theme">
    <router-view />
  </lay-config-provider>
</template>

<script>
import { ref } from 'vue';
import WOW from 'wow.js';
import FpsCounter from './utils/FpsCounter.vue'
import ThemeToggler from './utils/ThemeToggler.vue';

export default {
  name: 'App',
  components: {
    FpsCounter, ThemeToggler
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
  setup() {
    const theme  = ref('null')
    return { theme };
  }
}
</script>

<style>
</style>
