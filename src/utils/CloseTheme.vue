<!--关闭背景/点击效果-->
<template>
  <lay-tooltip position="left-start" :content="showBackground ? '关闭特效' : '打开特效'">
    <lay-backtop
      @click="toggleBackground"
      :bottom="140"
      circle
      size="small"
      bgcolor="#5FB878"
      iconSize="22"
      :showHeight="0"
      :icon="showBackground ? 'layui-icon-pause' : 'layui-icon-play'"
      disabled></lay-backtop>
  </lay-tooltip>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const showBackground = ref(true);

    // 切换主题
    const toggleBackground = () => {
      const newShowBackground = !showBackground.value;
      applyTheme(newShowBackground);
    };

    // 应用主题到页面
    const applyTheme = (newShow) => {
      store.dispatch('setBackground', newShow);
      showBackground.value = newShow;

      // 保存主题设置到localStorage，并设置84小时后过期
      const expires = new Date().getTime() + 84 * 60 * 60 * 1000; // 12小时后的时间戳
      localStorage.setItem('user-background', JSON.stringify({ showBackground: newShow, expires }));
    };

    // 从localStorage加载主题设置
    const loadThemeFromStorage = () => {
      const savedData = localStorage.getItem('user-background');
      if (savedData) {
        const { showBackground: savedShow, expires } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (expires && expires > currentTime) {
          applyTheme(savedShow);
        } else {
          localStorage.removeItem('user-background'); // 清理过期的主题设置
          applyDefaultTheme();
        }
      } else {
        applyDefaultTheme();
      }
    };

    // 应用默认主题
    const applyDefaultTheme = () => {
      applyTheme(true);
    };

    // 组件卸载时清理过期主题设置
    onMounted(() => {
      loadThemeFromStorage(true); // 加载主题
    });

    return {showBackground, toggleBackground};
  },
};
</script>

<style scoped>

</style>