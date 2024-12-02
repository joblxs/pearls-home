<template>
  <div class="fps-counter">
    <span>FPS: {{ fpsValue }}</span>
    <template v-if="fpsValue >= 60">
      <span>😎</span>
      <span style="color: #6bc30d">十分流畅</span>
    </template>
    <template v-else-if="fpsValue >= 30">
      <span>😐</span>
      <span style="color: #f8a037">还算流畅</span>
    </template>
    <template v-else>
      <span>😞</span>
      <span style="color: #cf3921">有点难受</span>
    </template>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'FpsCounter',
  setup() {
    const fpsValue = ref(0);
    let lastTime = performance.now();
    let frameCount = 0;
    let animationFrameId;

    const calculateFps = () => {
      frameCount += 1;
      if (frameCount >= 10) { // 每10帧更新一次FPS值
        const now = performance.now();
        const diff = now - lastTime;
        fpsValue.value = Math.round(1000 / (diff / frameCount));
        lastTime = now;
        frameCount = 0;
      }
      animationFrameId = requestAnimationFrame(calculateFps);
    };

    onMounted(() => {
      animationFrameId = requestAnimationFrame(calculateFps);
    });

    onUnmounted(() => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });

    return {
      fpsValue
    };
  }
};
</script>

<style scoped>
.fps-counter {
  position: fixed;
  bottom: 10px;
  left: 10px;
  padding: 8px;
  border-radius: 4px;
  z-index: 99;
  font-family: 'Arial', sans-serif;
  background: var(--7-background-rgba);
}
</style>