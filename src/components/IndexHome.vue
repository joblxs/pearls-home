<template>
  <!--横幅-->
  <BannerHome />
  <!--站点-->
  <StationHome />
</template>

<script>
import BannerHome from "@/components/module/BannerHome.vue";
import StationHome from "@/components/module/StationHome.vue";

export default {
  components: {
    BannerHome, StationHome
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
