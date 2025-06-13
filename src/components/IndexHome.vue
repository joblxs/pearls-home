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
    document.title = '拾贝歪栈|主页';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '非标准灵感收藏馆 - 创意人的斜杠栈道');
    document.querySelector('meta[name="description"]').setAttribute('content', '在这里，每颗 “歪贝壳” 都是反套路的光 —— 收集小众视角、脑洞生活与反常识观察');
  }
}
</script>

<style scoped>

</style>
