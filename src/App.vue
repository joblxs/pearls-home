<template>
  <!--实时监测fps-->
  <FpsCounter />
  <router-view />
</template>

<script>
import WOW from 'wow.js';
import FpsCounter from './utils/FpsCounter.vue'

export default {
  name: 'App',
  components: {
    FpsCounter,
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
}
</script>

<style>
</style>
