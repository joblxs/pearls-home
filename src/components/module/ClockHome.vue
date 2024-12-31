<template>
  <div class="container" ref="containerRef">
    <div class="secondBox box"></div>
    <div class="minuteBox box"></div>
    <div class="hourBox box"></div>
    <div class="dayBox box"></div>
    <div class="mounthBox box"></div>
    <div class="yearBox box"></div>
  </div>
</template>

<script setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

// 生成对应时间范围的DOM元素字符串的函数
const generateTimeDivs = (count, rotateStep, format) => {
  let divs = '';
  for (let i = 0; i < count; i++) {
    let onediv = `<div id="${format}${i + 1}" style="font-size: 16px;width: 100%;text-align: right;position: absolute;display: inline-block;transform: rotate(${(i) * rotateStep}deg);"> ${i + 1} ${format === 'sencond' ? '秒' : format === 'minute' ? '分' : format === 'hour' ? '时' : format === 'day' ? '日' : '月'}</div>`;
    divs += onediv;
  }
  return divs;
};

// 存储相关元素的DOM引用
const containerRef = ref(null);
// 存储时间相关的360度旋转计数
const sencond360 = ref(0);
const Minute360 = ref(0);
const hour360 = ref(0);
const day360 = ref(0);
const mounth360 = ref(0);
// 存储上一次的时间值
const oldsencond = ref(0);
const oldMinute = ref(0);
const oldhour = ref(0);
const oldday = ref(0);
const oldmounth = ref(0);

// 初始化函数，在组件挂载时执行
const initTimeClock = () => {
  const secondBox = containerRef.value.querySelector('.secondBox');
  secondBox.innerHTML = generateTimeDivs(60, -6, 'sencond');
  const minuteBox = containerRef.value.querySelector('.minuteBox');
  minuteBox.innerHTML = generateTimeDivs(60, -6, 'minute');
  const hourBox = containerRef.value.querySelector('.hourBox');
  hourBox.innerHTML = generateTimeDivs(24, -15, 'hour');
  const dayBox = containerRef.value.querySelector('.dayBox');
  dayBox.innerHTML = generateTimeDivs(31, -11.25, 'day');
  const mounthBox = containerRef.value.querySelector('.mounthBox');
  mounthBox.innerHTML = generateTimeDivs(12, -30, 'mounth');
};

// 转换盒子样式和更新当前显示元素类名的函数
const transformBox = () => {
  const nowDate = new Date();
  const second = nowDate.getSeconds();
  const minute = nowDate.getMinutes();
  const hour = nowDate.getHours();
  const day = nowDate.getDate();
  const mounth = nowDate.getMonth();
  const year = nowDate.getFullYear();

  if (second === 0 && oldsencond.value !== second) {
    sencond360.value++;
  }
  if (minute === 0 && oldMinute.value !== minute) {
    Minute360.value++;
  }
  if (hour === 0 && oldhour.value !== hour) {
    hour360.value++;
  }
  if (day === 1 && oldday.value !== day) {
    day360.value++;
  }
  if (mounth === 0 && oldmounth.value !== mounth) {
    mounth360.value++;
  }

  const secondBox = containerRef.value.querySelector('.secondBox');
  secondBox.style.transform = `rotate(${sencond360.value * 360 + (second) * 6}deg)`;
  const minuteBox = containerRef.value.querySelector('.minuteBox');
  minuteBox.style.transform = `rotate(${Minute360.value * 360 + (minute - 1) * 6}deg)`;
  const hourBox = containerRef.value.querySelector('.hourBox');
  hourBox.style.transform = `rotate(${hour360.value * 360 + (hour - 1) * 15}deg)`;
  const dayBox = containerRef.value.querySelector('.dayBox');
  dayBox.style.transform = `rotate(${day360.value * 360 + (day - 1) * 11.25}deg)`;
  const mounthBox = containerRef.value.querySelector('.mounthBox');
  mounthBox.style.transform = `rotate(${mounth360.value * 360 + mounth * 30}deg)`;

  const yearBox = containerRef.value.querySelector('.yearBox');
  yearBox.innerHTML = year + ' 年';

  const nowDates = containerRef.value.querySelectorAll('.NowData');
  nowDates.forEach((element) => element.classList = '');

  const setNowDataClass = (idSelector) => {
    const element = containerRef.value.querySelector(idSelector);
    if (element) {
      element.classList.add('NowData');
    }
  };

  setNowDataClass(`#sencond${second + 1}`);
  setNowDataClass(`#minute${minute === 0 ? '60' : minute}`);
  setNowDataClass(`#hour${hour === 0 ? '24' : hour}`);
  setNowDataClass(`#day${day}`);
  setNowDataClass(`#mounth${mounth + 1}`);

  oldsencond.value = second;
  oldMinute.value = minute;
  oldhour.value = hour;
  oldday.value = day;
  oldmounth.value = mounth;
};

let intervalId;
onMounted(() => {
  initTimeClock();
  transformBox();
  intervalId = setInterval(transformBox, 1000);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style>
.NowData {
  background-image: -webkit-linear-gradient(bottom, var(--background-color), var(--border-color));
  background-size: 100% 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<style scoped>
.container {
  font-size: 0px;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--5-background-rgba);
}

.box {
  position: absolute;
  display: flex;
  align-items: center;
  border-radius: 50%;
  transition: 1s;
}

.yearBox {
  height: 10vh;
  width: 10vh;
  font-size: 16px;
  justify-content: center;
  background-image: -webkit-linear-gradient(bottom, var(--background-color), var(--border-color));
}

.mounthBox {
  height: 25vh;
  width: 25vh;
}

.dayBox {
  height: 40vh;
  width: 40vh;
}

.hourBox {
  height: 55vh;
  width: 55vh;
}

.minuteBox {
  height: 70vh;
  width: 70vh;
}

.secondBox {
  height: 85vh;
  width: 85vh;
}
</style>