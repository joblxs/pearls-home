<template>
  <!--导航抽屉-->
  <NavHome />
  <!--横幅-->
  <BannerHome />
  <!--热榜-->
  <HotHome />
  <!--站点-->
  <StationHome />
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
    document.title = '主页';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '主页，个人网站，好看的个人主页');
    document.querySelector('meta[name="description"]').setAttribute('content', '个人主页搭建');
  }
}
</script>

<style scoped>

</style>
