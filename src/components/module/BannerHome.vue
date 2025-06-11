<template>
  <div class="banner">
<!--    <div class="banner-img"></div>-->
    <object class="background-iframe" :data="newBackground" type="text/html"></object>
    <div class="title wow animate__animated animate__bounceIn" data-wow-duration="2s">
      <h1>拾贝</h1>
      <p>{{ dailyQuote }}</p>
    </div>
    <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    // 每日一言
    const dailyQuote = ref('');
    const newBackground = ref('');

    const fetchDailyQuote = async () => {
      try {
        const response = await axios.get('https://api.vvhan.com/api/ian/rand?type=json');
        dailyQuote.value = response.data.data.content;
      } catch (error) {
        console.error('请求每日一言出错：', error);
        dailyQuote.value = '';
      }
    };

    // 滚动到第二屏的位置
    const scrollToNextSection = () => {
      const nextSectionPosition = window.innerHeight;
      window.scrollTo({
        top: nextSectionPosition,
        behavior: 'smooth'
      });
    }

    // 获取主题
    const theme = computed(() => store.state.theme);
    // 监听主题变化
    watch(theme, (newTheme) => {
      newBackground.value = `/theme/background/Background-${newTheme}-${Math.random() < 0.5 ? 0 : 1}.html`;
    });
    // 在组件挂载时调用获取每日一言的函数
    onMounted(() => {
      fetchDailyQuote();
      newBackground.value = `/theme/background/Background-${theme.value}-${Math.random() < 0.5 ? 0 : 1}.html`;
    });

    return {
      scrollToNextSection, dailyQuote, newBackground
    }
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  display: flex; /* 使用flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  position: relative; /* 相对定位 */
}
.background-iframe {
  width:100%;
  height: 100vh;
  opacity: 0.8;
  position: absolute; /* 绝对定位，覆盖在banner上 */
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center center; /* 背景图片居中 */
  background-size: cover; /* 背景图片不平铺，覆盖整个元素 */
}
.banner-img {
  width:100%;
  height: 100vh;
  opacity: 0.8;
  position: absolute; /* 绝对定位，覆盖在banner上 */
  top: 0;
  left: 0;
  background: url("@/assets/images/xingkong.webp");
  background-repeat: no-repeat;
  background-position: center center; /* 背景图片居中 */
  background-size: cover; /* 背景图片不平铺，覆盖整个元素 */
}
.title {
  text-align: center;
  margin: 0 auto;
  max-width: 90vw;
  z-index: 3; /* 确保标题在图片之上 */
}
.title h1 {
  font-size: 32px;
  font-family: YunFengFeiYunTi;
}
.title p {
  font-size: 16px;
  letter-spacing: 0.5rem;
  margin: 1rem 0;
}
.next {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  transition: all .5s ease-out;
  cursor: pointer;
  z-index: 3;
  animation: breathe 3s infinite;
}
@keyframes breathe {
  0% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
}
.next:hover {
  background-color: var(--background-color);
}
.next:before {
  font-size: 3rem;
  display: table;
  margin: 0 auto;
}
</style>