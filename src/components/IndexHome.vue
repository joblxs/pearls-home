<template>
  <!--导航抽屉-->
  <NavHome />
  <!--横幅-->
  <BannerHome />
  <!--站点-->
  <StationHome />
  <!--热榜-->
  <HotHome />
  <!--底部-->
  <FooterHome />
</template>

<script>
import BannerHome from "@/components/module/BannerHome.vue";
import StationHome from "@/components/module/StationHome.vue";
import FooterHome from "@/components/module/FooterHome.vue";
import HotHome from "@/components/module/HotHome.vue";
import NavHome from "@/components/module/NavHome.vue";

export default {
  components: {
    BannerHome, StationHome, FooterHome, HotHome, NavHome
  },
  mounted() {
    document.title = '拾贝歪栈 - 创意灵感与技术干货的反套路集合地';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '拾贝歪栈, 非标准灵感, 创意脑洞, 编程技巧, 代码片段, 小众技术, 开发灵感');
    document.querySelector('meta[name="description"]').setAttribute('content', '欢迎来到拾贝歪栈！这里是创意人的斜杠栈道，收集小众视角、脑洞生活与反常识观察。每颗 “歪贝壳” 都是反套路的光，带你探索不一样的世界。');
  }
}
</script>

<style scoped>

</style>
