<!--基于Canvas实现的鼠标点击效果-->
<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

// 1. 定义canvas元素的引用，初始值为null，用于后续获取DOM元素
const canvas = ref(null);
// 定义图形可用的颜色数组
const colors = [
  "#8A2BE2",
  "#D7263D",
  "#FFD700",
  "#3A86FF",
  "#00CED1",
  "#7CB342",
];
// 用于存储所有创建的图形对象的数组
let shapes = [];

// 2. onMounted钩子函数，在组件挂载时执行
onMounted(() => {
  // 获取canvas元素的2D绘图上下文，如果获取失败则打印错误信息并返回
  const ctx = canvas.value.getContext('2d');
  if (!ctx) {
    console.error('Could not get 2D context for the canvas');
    return;
  }
  // 获取canvas元素在页面中的实际宽度和高度
  const width = canvas.value.offsetWidth;
  const height = canvas.value.offsetHeight;
  // 设置canvas元素的宽度和高度，使其与实际显示尺寸一致
  canvas.value.width = width;
  canvas.value.height = height;

  // 为canvas元素添加点击事件监听，当点击canvas时调用createMouseEffect函数，并传入点击位置的坐标
  canvas.value.addEventListener('click', (e) => {
    createMouseEffect(e.clientX, e.clientY);
  });

  // 启动动画循环，开始执行动画相关逻辑
  animate();
});

// 3. onUnmounted钩子函数，在组件卸载时执行
// 移除canvas元素上的点击事件监听，避免组件卸载后仍存在不必要的事件绑定，防止潜在的内存泄漏等问题
onUnmounted(() => {
  canvas.value.removeEventListener('click', createMouseEffect);
});

// 4. 定义Shape类，用于表示各种图形对象
class Shape {
  constructor(type, x, y, size, color, speedX, speedY) {
    // 图形类型，如circle（圆形）、heart（心形）等
    this.type = type;
    // 图形在canvas中的x坐标
    this.x = x;
    // 图形在canvas中的y坐标
    this.y = y;
    // 图形的尺寸大小
    this.size = size;
    // 图形的填充颜色
    this.color = color;
    // 图形在x轴方向的移动速度
    this.speedX = speedX;
    // 图形在y轴方向的移动速度
    this.speedY = speedY;
  }

  // 绘制图形的方法，根据图形类型使用不同的绘图逻辑在给定的绘图上下文ctx上绘制图形
  draw(ctx) {
    if (this.color) {
      ctx.fillStyle = this.color;
    }
    switch (this.type) {
      case "circle":
        ctx.beginPath();
        // 绘制圆形，圆心为 (this.x, this.y)，半径为this.size，角度从0到2π
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        break;
      case "heart":
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        // 使用贝塞尔曲线绘制心形图形，通过一系列控制点来定义曲线形状
        ctx.bezierCurveTo(
          this.x + this.size / 2,
          this.y - this.size / 2,
          this.x + this.size / 2,
          this.y + this.size / 4,
          this.x,
          this.y + this.size / 2
        );
        ctx.bezierCurveTo(
          this.x - this.size / 2,
          this.y + this.size / 4,
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.x,
          this.y
        );
        ctx.closePath();
        ctx.fill();
        break;
      case "square":
        // 绘制矩形，指定左上角坐标和矩形的宽度、高度
        ctx.fillRect(
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size,
          this.size
        );
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size / 2);
        ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2);
        ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2);
        ctx.closePath();
        ctx.fill();
        break;
      case "custom":
        if (typeof this.customDraw === "function") {
          // 如果定义了自定义绘制函数，则调用该函数进行绘制
          this.customDraw(ctx, this.x, this.y, this.size, this.color, this.speedX, this.speedY);
        } else {
          console.error("Custom draw function is not defined");
        }
        break;
      default:
        console.error("Shape type not recognized");
    }
  }

  // 设置自定义绘制函数，并将图形类型标记为'custom'
  setCustomDraw(func) {
    this.customDraw = func;
    this.type = "custom";
  }

  // 更新图形的状态，包括移动位置和缩小尺寸（每次尺寸乘以0.98）
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98;
  }
}

// 5. 当在canvas上点击时触发的函数，用于创建一批新的图形对象（默认是圆形）
function createMouseEffect(x, y) {
  const shapeNum = 50;
  for (let i = 0; i < shapeNum; i++) {
    // 随机选择一种颜色
    const color = colors[Math.floor(Math.random() * colors.length)];
    // 随机生成图形的尺寸大小
    const size = Math.random() * 5 + 4;
    // 随机生成x轴方向的移动速度
    const speedX = (Math.random() * 2 - 1) * 2;
    // 随机生成y轴方向的移动速度
    const speedY = (Math.random() * 2 - 1) * 2;
    // 创建一个圆形的图形对象，并添加到shapes数组中
    shapes.push(new Shape('heart', x, y, size, color, speedX, speedY));
  }
}

// 6. 绘制所有图形的函数，遍历shapes数组，更新每个图形状态并绘制，若图形尺寸小于等于2则从数组中移除
function drawShapes() {
  for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    shape.update();
    shape.draw(canvas.value.getContext('2d'));
    if (shapes[i].size <= 2) {
      shapes.splice(i, 1);
      i--;
    }
  }
}

// 7. 动画循环函数，不断清除canvas画布，绘制图形，然后通过requestAnimationFrame请求下一帧动画
function animate() {
  const ctx = canvas.value.getContext('2d');
  if (!ctx) {
    return;
  }
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  drawShapes();
  requestAnimationFrame(animate);
}
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>