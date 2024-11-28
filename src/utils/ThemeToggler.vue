<template>
  <lay-tooltip position="left-start" content="切换主题">
    <lay-backtop
      @click="toggleTheme"
      :bottom="150"
      circle
      size="small"
      bgcolor="#5FB878"
      iconSize="22"
      :showHeight="0"
      :icon="theme === 'dark' ? 'layui-icon-light' : 'layui-icon-moon'"></lay-backtop>
  </lay-tooltip>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const theme = ref('light');

    // 切换主题
    const toggleTheme = () => {
      const newTheme = theme.value === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
    };

    // 应用主题到页面
    const applyTheme = (newTheme) => {
      theme.value = newTheme;

      // 移除旧的<style>元素
      const currentLink = document.getElementById('dynamic-theme');
      if (currentLink) {
        document.head.removeChild(currentLink);
      }
      const link = document.createElement('link');
      link.id = 'dynamic-theme';
      link.rel = 'stylesheet';
      link.href = `/theme/css/${newTheme}.css`;
      document.head.appendChild(link);

      // 保存主题设置到localStorage，并设置12小时后过期
      const expires = new Date().getTime() + 12 * 60 * 60 * 1000; // 12小时后的时间戳
      localStorage.setItem('user-theme', JSON.stringify({ theme: newTheme, expires }));
    };

    // 从localStorage加载主题设置
    const loadThemeFromStorage = () => {
      const savedData = localStorage.getItem('user-theme');
      if (savedData) {
        const { theme: savedTheme, expires } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (savedTheme && expires && expires > currentTime) {
          applyTheme(savedTheme);
        } else {
          localStorage.removeItem('user-theme'); // 清理过期的主题设置
          applyDefaultTheme();
        }
      } else {
        applyDefaultTheme();
      }
    };

    // 应用默认主题
    const applyDefaultTheme = () => {
      const currentHour = new Date().getHours();
      applyTheme(currentHour >= 6 && currentHour < 18 ? 'light' : 'dark');
    };

    // 组件卸载时清理过期主题设置
    onMounted(() => {
      loadThemeFromStorage(); // 加载主题
    });

    return {theme, toggleTheme};
  },
};
</script>

<style scoped>

</style>