<template>
  <div class="banner">
    <div class="banner-img"></div>
    <div class="title wow animate__animated animate__bounceIn" data-wow-duration="2s">
      <h1>拾贝</h1>
      <p>只要朝着一个方向努力，一切都会变得得心应手</p>
    </div>
    <lay-icon type="layui-icon-down" class="next wow animate__animated animate__zoomIn" data-wow-duration="2s" @click="scrollToNextSection"></lay-icon>
  </div>
</template>

<script>
export default {
  setup() {
    const scrollToNextSection = () => {
      // 滚动到第二屏的位置
      const nextSectionPosition = window.innerHeight;
      window.scrollTo({
        top: nextSectionPosition,
        behavior: 'smooth'
      });
    }
    return {
      scrollToNextSection
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
  max-width: 800px;
  z-index: 3; /* 确保标题在图片之上 */
}
.title h1 {
  font-size: 2.5rem;
}
.title p {
  font-size: 1rem;
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
}
.next:hover {
  background-color: var(--background-color);
}
.next:before {
  font-size: 3rem;
  display: table;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .title h1 {
    font-size: 2rem;
  }
  .title p {
    font-size: 0.9rem;
    letter-spacing: 0.3rem;
  }
}
@media (max-width: 480px) {
  .title h1 {
    font-size: 1.5rem;
  }
  .title p {
    font-size: 0.8rem;
    letter-spacing: 0.2rem;
  }
}
</style>