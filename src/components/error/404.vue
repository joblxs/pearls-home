<template>
  <div class="error-container" :class="{'wave-animation': waveAnimation}">
    <!-- 背景海浪元素 -->
    <div class="wave wave1"></div>
    <div class="wave wave2"></div>
    <div class="wave wave3"></div>

    <!-- 贝壳主体 -->
    <div class="shell-container">
      <div class="shell" @click="toggleWave">
        <div class="shell-inner"></div>
        <div class="shine"></div>
      </div>
      <div class="lost-text">哎呀，这颗贝壳破碎啦！</div>
    </div>

    <!-- 提示文本 -->
    <div class="message-container">
      <h1 class="error-code">404</h1>
      <p class="error-message">你好像走进了一片未知的海域...</p>
      <p class="error-hint">别担心，点击下面的海螺，回到安全的海岸吧！</p>

      <!-- 贝壳地图导航 -->
      <div class="shell-map" @click="navigateHome">
        <div class="map-line"></div>
        <div class="map-dot dot1"></div>
        <div class="map-dot dot2"></div>
        <div class="map-dot dot3"></div>
        <div class="map-dot dot4"></div>
        <div class="map-text">歪栈地图</div>
      </div>
    </div>

    <!-- 漂浮的小贝壳 - 仅在中等以上屏幕显示 -->
    <div class="floating-shell shell1" :class="{'float-animation': floatAnimation}" v-if="!isMobile"></div>
    <div class="floating-shell shell2" :class="{'float-animation': floatAnimation}" v-if="!isMobile"></div>
    <div class="floating-shell shell3" :class="{'float-animation': floatAnimation}" v-if="!isMobile"></div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  data() {
    return {
      waveAnimation: false,
      floatAnimation: false,
      isMobile: window.innerWidth < 480
    }
  },
  mounted() {
    document.title = '拾贝歪栈 | 页面迷路啦';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '非标准灵感收藏馆 - 创意人的斜杠栈道');
    document.querySelector('meta[name="description"]').setAttribute('content', '在这里，每颗 “歪贝壳” 都是反套路的光 —— 收集小众视角、脑洞生活与反常识观察');
    // 初始化动画
    setTimeout(() => {
      this.waveAnimation = true;
      this.floatAnimation = true;
    }, 300);

    // 监听窗口大小变化
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    toggleWave() {
      this.waveAnimation = !this.waveAnimation;
    },
    navigateHome() {
      this.$router.push('/');
    },
    handleResize() {
      this.isMobile = window.innerWidth < 480;
    }
  }
}
</script>

<style scoped>
.error-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom, #e0f7fa, #b2ebf2); /* 更柔和的蓝色渐变 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

/* 海浪背景 - 响应式高度 */
.wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: clamp(60px, 8vh, 100px);
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%2380deea" fill-opacity="0.3" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,149.3C672,160,768,192,864,186.7C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
  background-size: clamp(800px, 100vw, 1440px) clamp(60px, 8vh, 100px);
  animation: wave 15s linear infinite;
}

.wave1 {
  opacity: 0.3;
  bottom: 0;
  animation-delay: 0s;
}

.wave2 {
  opacity: 0.2;
  bottom: clamp(5px, 1vh, 10px);
  animation-delay: -5s;
}

.wave3 {
  opacity: 0.1;
  bottom: clamp(8px, 1.5vh, 15px);
  animation-delay: -10s;
}

@keyframes wave {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: clamp(800px, 100vw, 1440px);
  }
}

.wave-animation .wave {
  animation-duration: 10s;
}

/* 贝壳主体 - 响应式尺寸 */
.shell-container {
  position: relative;
  margin-bottom: clamp(20px, 5vh, 40px);
  cursor: pointer;
  transform-origin: center bottom;
  transition: transform 0.3s ease;
}

.shell-container:hover {
  transform: scale(1.1) rotate(3deg); /* 增大放大比例和旋转角度 */
}

.shell {
  width: clamp(100px, 18vw, 150px); /* 增大贝壳尺寸 */
  height: clamp(60px, 12vw, 100px); /* 增大贝壳尺寸 */
  background: linear-gradient(135deg, #fafafa 0%, #e8e8e8 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: relative;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15); /* 增大阴影 */
  transform: rotate(-7deg); /* 增大旋转角度 */
}

.shell-inner {
  position: absolute;
  top: clamp(5px, 1vw, 8px);
  left: clamp(5px, 1vw, 8px);
  right: clamp(5px, 1vw, 8px);
  bottom: clamp(5px, 1vw, 8px);
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.15); /* 增大内阴影 */
}

.shine {
  position: absolute;
  top: clamp(15px, 3vw, 25px);
  left: clamp(20px, 4vw, 40px);
  width: clamp(40px, 8vw, 80px);
  height: clamp(20px, 4vw, 40px);
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  transform: rotate(-20deg); /* 增大旋转角度 */
  filter: blur(8px); /* 增大模糊度 */
}

.lost-text {
  position: absolute;
  bottom: -clamp(25px, 5vw, 40px);
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 更换字体 */
  color: #00838f;
  font-size: clamp(16px, 3.5vw, 22px);
  white-space: nowrap;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

/* 提示文本 - 响应式容器和字体 */
.message-container {
  text-align: center;
  padding: clamp(20px, 4vw, 30px);
  background: rgba(255, 255, 255, 0.9);
  border-radius: clamp(15px, 3vw, 25px);
  box-shadow: 0 15px 35px rgba(0, 131, 143, 0.2); /* 增大阴影 */
  max-width: clamp(320px, 85vw, 500px);
  margin: 0 auto;
  transform: rotate(2deg);
  position: relative;
  z-index: 10;
}

.error-code {
  font-family: 'Open Sans', sans-serif; /* 更换字体 */
  font-size: clamp(50px, 10vw, 80px);
  color: #00838f;
  margin: 0;
  text-shadow: 3px 3px 0px rgba(255, 255, 255, 1);
}

.error-message {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 更换字体 */
  font-size: clamp(20px, 4.5vw, 28px);
  color: #333;
  margin: clamp(10px, 2.5vw, 15px) 0;
}

.error-hint {
  font-family: 'Open Sans', sans-serif; /* 更换字体 */
  font-size: clamp(16px, 3.5vw, 20px);
  color: #666;
  margin-bottom: clamp(20px, 4vw, 30px);
}

/* 贝壳地图导航 - 响应式尺寸 */
.shell-map {
  display: inline-block;
  position: relative;
  padding: clamp(12px, 2.5vw, 18px) clamp(20px, 5vw, 30px);
  background: linear-gradient(135deg, #ffb74d 0%, #ffa726 100%);
  border-radius: clamp(20px, 4vw, 35px);
  box-shadow: 0 8px 18px rgba(255, 167, 38, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 50px; /* 增大触摸友好高度 */
}

.shell-map:hover {
  transform: translateY(-5px); /* 增大向上移动距离 */
  box-shadow: 0 12px 25px rgba(255, 167, 38, 0.6);
}

.map-line {
  position: absolute;
  top: 50%;
  left: clamp(15px, 3vw, 25px);
  right: clamp(15px, 3vw, 25px);
  height: 3px; /* 增大线条粗细 */
  background: #fff;
  transform: translateY(-50%);
}

.map-dot {
  position: absolute;
  top: 50%;
  width: clamp(7px, 1.5vw, 12px);
  height: clamp(7px, 1.5vw, 12px);
  background: #fff;
  border-radius: 50%;
  transform: translateY(-50%);
}

.dot1 {
  left: clamp(15px, 3vw, 25px);
}

.dot2 {
  left: clamp(35px, 7vw, 50px);
}

.dot3 {
  right: clamp(35px, 7vw, 50px);
}

.dot4 {
  right: clamp(15px, 3vw, 25px);
}

.map-text {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 更换字体 */
  color: #fff;
  font-size: clamp(16px, 3.5vw, 20px);
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  padding: 0 clamp(10px, 2.5vw, 15px);
  position: relative;
  z-index: 1;
}

/* 漂浮的小贝壳 - 响应式尺寸 */
.floating-shell {
  position: absolute;
  width: clamp(25px, 5vw, 40px);
  height: clamp(15px, 3vw, 25px);
  background: linear-gradient(135deg, #fafafa 0%, #e8e8e8 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
  opacity: 0;
}

.shell1 {
  top: 20%;
  left: 10%;
  transform: rotate(20deg);
}

.shell2 {
  top: 30%;
  right: 15%;
  transform: rotate(-30deg);
}

.shell3 {
  top: 60%;
  left: 20%;
  transform: rotate(35deg);
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.9;
  }
  90% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-clamp(60px, 12vh, 120px)) rotate(720deg);
    opacity: 0;
  }
}

.float-animation .shell1 {
  animation: float 18s linear infinite;
  animation-delay: 0s;
}

.float-animation .shell2 {
  animation: float 22s linear infinite;
  animation-delay: 3s;
}

.float-animation .shell3 {
  animation: float 20s linear infinite;
  animation-delay: 7s;
}

/* 减少动画偏好的用户 */
@media (prefers-reduced-motion: reduce) {
  .wave, .float-animation .shell1, .float-animation .shell2, .float-animation .shell3 {
    animation: none;
  }
}

/* 小屏幕优化 */
@media (max-width: 576px) {
  .wave {
    animation-duration: 25s; /* 减慢海浪动画 */
  }

  .shell-container {
    margin-bottom: 25px;
  }

  .message-container {
    transform: rotate(0); /* 小屏幕取消旋转 */
  }
}
</style>