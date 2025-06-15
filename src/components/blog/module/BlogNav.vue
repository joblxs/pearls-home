<!--博客导航-->
<template>
  <div class="container">
    <div class="header-fixed">
      <!-- 网站logo -->
      <router-link to="/" class="header-logo">拾贝歪栈</router-link>
      <ul class="menu" id="nav">
        <li v-for="item in menuItems" :key="item.id">
          <router-link :to="item.subItems ? {} : item.url">
            {{ item.title }}
            <span v-if="item.subItems" class="arrow">
              🔜
            </span>
          </router-link>

          <ul v-if="item.subItems" class="sub-menu">
            <li v-for="subItem in item.subItems" :key="subItem.id">
              <router-link :to="subItem.url">{{ subItem.title }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <a href="#" class="blog-search">
        <lay-icon type="layui-icon-search"></lay-icon>
      </a>
      <!-- 手机菜单按钮 -->
      <a class="phone-menu" @click="toggleNavMenu">
        <i></i>
        <i></i>
        <i></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: '主页',
          url: '/'
        },
        // {
        //   id: 5,
        //   title: '列表',
        //   url: '#blog',
        //   subItems: [
        //     {id: 6, title: 'Lorem ipsum dolor', url: '#lorem'},
        //     {id: 7, title: 'Maecenas dignissim fermentum luctus', url: '#maecenas'},
        //     {id: 8, title: 'Suspendisse fringilla', url: '#suspendisse'},
        //     {id: 9, title: 'Lorem ipsum dolor', url: '#lorem'},
        //     {id: 10, title: 'Maecenas lacinia sem', url: '#maecenas'},
        //     {id: 11, title: 'Suspendisse fringilla', url: '#suspendisse'}
        //   ]
        // },
        // {
        //   id: 12,
        //   title: 'Clients',
        //   url: '#clients',
        //   subItems: [
        //     {id: 13, title: 'Lorem ipsum dolor', url: '#lorem'},
        //     {id: 14, title: 'Maecenas lacinia sem', url: '#maecenas'},
        //     {id: 15, title: 'Suspendisse fringilla', url: '#suspendisse'}
        //   ]
        // },
        // {
        //   id: 16,
        //   title: 'Contact Me',
        //   url: '#contact',
        //   subItems: [
        //     {id: 17, title: 'Lorem ipsum dolor', url: '#lorem'},
        //     {id: 18, title: 'Maecenas dignissim fermentum luctus', url: '#maecenas'},
        //     {id: 19, title: 'Suspendisse fringilla', url: '#suspendisse'}
        //   ]
        // },
        // {
        //   id: 20,
        //   title: 'Support',
        //   url: '#support'
        // }
      ]
    };
  },
  setup() {
    // 切换手机导航菜单的显示状态
    const toggleNavMenu = () => {
      const navMenu = document.getElementById('nav');
      navMenu.style.display = navMenu.style.display === '' || navMenu.style.display === 'none' ? 'block' : 'none';
    };
    return {toggleNavMenu}
  }
}
</script>

<style scoped>
.header-fixed {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.container {
  width: 100%;
  min-height: 60px;
  position: fixed;
  background-color: var(--10-background-rgba);
  z-index: 15;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--border-color);
}

.header-logo {
  font-family: YunFengFeiYunTi;
  font-size: 40px;
  text-align: center;
  position: absolute;
  line-height: 70px;
}

.menu {
  display: block;
  position: absolute;
  right: 15%
}

.menu, .menu ul {
  list-style: none;
}

.menu > li {
  display: block;
  float: left;
  margin: 10px 5px;
  position: relative
}

.menu a {
  display: block;
  position: relative;
  z-index: 10;
  padding: 13px 20px 13px 20px;
  text-decoration: none;
  color: var(--font-color);
  line-height: 1;
  font-weight: 600;
  letter-spacing: -.05em;
  background: transparent;
  text-shadow: 0 1px 1px var(--9-background-rgba);
  transition: all .25s ease-in-out;
}

.menu > li:hover > a {
  color: var(--background-color);
  text-shadow: 0 1px 0 var(--2-background-rgba);
  -webkit-transition: all .2s;
  transition: all .2s
}

.menu li ul {
  position: absolute;
  left: 0;
  z-index: 10;
  width: 200px;
  padding: 0;
  opacity: 0;
  visibility: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: transparent;
  overflow: hidden;
  transform-origin: 50% 0%;
}

.menu li:hover ul {
  padding: 15px 0;
  background: var(--10-background-rgba);
  opacity: 1;
  visibility: visible;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, .5);
  animation-name: swingdown;
  animation-duration: 1s;
  animation-timing-function: ease;
}

.arrow {
  display: inline-block;
  margin-left: 5px;
  transition: transform 0.25s ease-in-out;
}

.menu > li:hover .arrow {
  transform: rotate(90deg);
}

.blog-search {
  position: absolute;
  line-height: 60px;
  font-size: 24px;
  right: 0
}
.blog-search .layui-icon {
  font-size: 24px;
}

@keyframes swingdown {
  0% {
    opacity: .99999;
    transform: rotateX(90deg);
  }

  30% {
    transform: rotateX(-20deg) rotateY(5deg);
    animation-timing-function: ease-in-out;
  }

  65% {
    transform: rotateX(20deg) rotateY(-3deg);
    animation-timing-function: ease-in-out;
  }

  100% {
    transform: rotateX(0);
    animation-timing-function: ease-in-out;
  }
}

.menu li li a {
  padding-left: 15px;
  font-weight: 400;
  text-shadow: none;
  border-top: dotted 1px transparent;
  border-bottom: dotted 1px transparent;
  transition: all .15s linear;
}

.menu li li a:hover {
  color: var(--background-color);
  border-top: dotted 1px rgba(255, 255, 255, .15);
  border-bottom: dotted 1px rgba(255, 255, 255, .15);
  background: rgba(0, 223, 252, .02);
}

.phone-menu {
  width: 50px;
  height: 50px;
  display: inline-block;
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 5px
}

.phone-menu i {
  background: #787977;
  display: inline-block;
  width: 22px;
  height: 2px;
  position: absolute;
  left: 14px
}

.phone-menu i:nth-of-type(1) {
  top: 18px
}

.phone-menu i:nth-of-type(2) {
  top: 25px
}

.phone-menu i:nth-of-type(3) {
  top: 32px
}

@media screen and (min-width: 1025px) {
  .phone-menu {
    display: none
  }

  .menu {
    display: block !important
  }
}

@media screen and (max-width: 1366px) {
  .header-fixed {
    width: 90%
  }

  .phone-menu {
    display: none
  }

  .menu {
    display: block
  }
}

@media screen and (max-width: 1024px) {
  .blog-search {
    right: auto;
  }

  .header-fixed {
    width: 90%
  }

  .header-logo {
    left: 25%;
    width: 50%;
    font-size: 30px;
  }

  .menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0
  }

  .phone-menu {
    display: block
  }

  .menu {
    display: none;
    width: 100%;
    background: rgba(255, 255, 255, 1)
  }

  .menu li:before {
    bottom: 0;
    z-index: 10
  }

  .menu li {
    float: none;
    border-bottom: 1px solid #e8e9e7
  }

  .menu li:last-child {
    border: 0
  }
}
</style>