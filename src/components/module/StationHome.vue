<template>
  <h1 class="wow animate__animated animate__zoomIn">站点</h1>
  <div class="section">
    <div class="links">
      <ul>
        <li class="wow animate__animated animate__lightSpeedInLeft" v-for="(site, index) in siteItems" :key="index">
          <a :href="site.link" target="_blank" rel="noopener noreferrer">
            <lay-icon :type="site.icon" style="margin-right: 10px;"></lay-icon>
            {{ site.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteItems: [
        {title: '个人主页', icon: 'layui-icon-home', link: '/'},
        {title: '博客', icon: 'layui-icon-template', link: 'https://www.lxshuai.top/'}
      ]
    };
  },
}
</script>

<style scoped>
h1 {
  font-size: 32px;
  padding-bottom: 30px;
  position: relative;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
  padding-top: 15px;
  font-family: YunFengFeiYunTi;
}

h1:after {
  position: absolute;
  width: 50px;
  margin-left: -25px;
  height: 2px;
  content: "";
  left: 50%;
  bottom: 0;
  background-color: var(--background-color);
}

.section {
  width: 100%;
  position: relative;
  padding: 100px 0;
  text-align: center;
  background-image: url("@/assets/images/earth.webp");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.links li {
  display: inline-block;
  width: 200px;
  height: 46px;
  margin: 10px;
  border: 1px solid var(--border-color);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .6s linear;
  transition: all .6s linear;
  position: relative;
  text-align: center;
  overflow: hidden;
  background-color: var(--7-background-rgba);
  z-index: 3;
  border-radius: 5%;
}

.links li a {
  display: block;
  line-height: 26px;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  -webkit-transition: all .6s linear;
  transition: all .6s linear;
  position: relative;
  z-index: 3;
}

.links li:after {
  content: '';
  width: 0;
  background-color: var(--background-color);
  height: 46px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  -webkit-transition: all .6s linear;
  transition: all .6s linear;
}

.links li:hover:after {
  width: 100%;
}
</style>