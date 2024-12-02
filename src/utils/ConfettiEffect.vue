<template>
  <div @click="addConfetti" class="clickable-area"></div>
</template>

<script setup>
import confetti from 'canvas-confetti'

const addConfetti = (e) => {
  const end = Date.now() + 0.3 * 1000;
  const colors = ['#FF0000', '#00FF00', '#0000FF'];

  (function frame() {
    confetti({
      particleCount: 3, // Number（默认值：50），要发射的五彩纸屑的数量
      spread: 360, // Number（默认值：45），五彩纸屑在垂直方向扩散的角度，45 表示五彩纸屑以垂直方向正负 22.5 度角发射。
      angle: 360, // Number（默认值：90）：发射的角度，0 表示水平向右；90 表示垂直向上；180 表示水平向左；270 表示垂直向下。
      gravity: 0, // Number（默认值：1），粒子下落的速度。1 是全重力，0.5 是半重力，0 表示无重力；大于 1 表示加速下落，负值表示粒子会向上升起
      ticks: 50, // Number (默认值: 200) ，值越小粒子消失得越快，值越大粒子消失得越慢。
      startVelocity: 10, // Number（默认值：45），五彩纸屑开始移动的速度，以像素为单位。
      origin: {
        x: e.clientX / innerWidth, // origin.x：Number（默认值：0.5）：发射的水平方向原点，0 表示左边缘，1 表示右边缘
        y: e.clientY / innerHeight // origin.y：Number (默认值: 0.5) :发射的垂直方向原点，0 表示上边缘，1 表示下边缘。
      },
      colors: colors // Array：颜色字符串数组
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
</script>

<style scoped>
.clickable-area {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>