<!--导航抽屉-->
<template>
  <div class="nav">
    <lay-backtop
      @click="toggleMenu"
      style="top:50px;"
      circle
      size="medium"
      bgcolor="#5FB878"
      iconSize="22"
      :showHeight="0"
      :icon="currentIcon"
      disabled>
    </lay-backtop>

    <div class="navigation" :class="{ 'navigation-hidden': !isNavVisible }">
      <ul class="navigation-point">
        <li v-for="(site, index) in siteItems" :key="index">
          <a :href="site.link" rel="noopener noreferrer">{{ site.title }}</a>
        </li>
      </ul>
      <div class="navigation-logo"><a href="javascript:void(0)">拾贝歪栈</a></div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      siteItems: [
        {title: '主页', icon: 'layui-icon-home', link: 'javascript:void(0)'},
        {title: '博客', icon: 'layui-icon-template', link: '/blog'}
      ]
    };
  },
  setup() {
    const menuClosed = ref(true);
    const currentIcon = ref('layui-icon-shrink-right');
    const isNavVisible = ref(false);

    const toggleMenu = () => {
      menuClosed.value = !menuClosed.value;
      currentIcon.value = menuClosed.value ? 'layui-icon-shrink-right' : 'layui-icon-spread-left'; // 切换图标
      isNavVisible.value = !menuClosed.value; // 切换导航的可见性
    };

    return {
      menuClosed, toggleMenu, currentIcon, isNavVisible
    };
  }
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 101;
  background: var(--6-background-rgba);
  transition: transform 0.3s ease-in-out;
}

.navigation-hidden {
  transform: translateX(100%);
}

.navigation:before {
  content: '';
  width: 60%;
  height: 100%;
  background: var(--10-background-rgba);
  position: fixed;
  transform: translateZ(0) translateX(45%) skew(-12deg);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
  z-index: 11;
  right: 0
}

.navigation-point {
  position: absolute;
  right: 0;
  top: 200px;
  z-index: 101;
  font-size: 20px
}

.navigation-point li {
  display: block;
  text-align: right;
  line-height: 80px
}

.navigation-point li a {
  display: inline-block;
  line-height: 46px;
  padding: 10px 50px;
  font-size: 20px;
  text-decoration: none;
  -webkit-transition: color .6s linear;
  transition: color .6s linear;
  position: relative;
}

.navigation-point li a:before {
  -webkit-transition: all .3s linear;
  transition: all .3s linear;
  content: '';
  height: 1px;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 15px;
  right: 105px
}

.navigation-point li a:hover:before {
  background-color: var(--background-color);
  right: 15px
}

.navigation-logo {
  font-size: 50px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 101;
  padding: 10px 50px
}

.navigation-logo a {
  font-family: YunFengFeiYunTi;
  text-decoration: none
}

@media screen and (max-width: 768px) {
  .navigation:before, .navigation:before {
    width: 50%;
    transform: none;
    -webkit-transform: none;
  }

  .navigation-logo {
    width: 50%;
    padding: 0;
    text-align: center;
  }
}
</style>