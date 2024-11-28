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
import { ref } from 'vue';

export default {
  setup() {
    const theme = ref('light');

    // 切换主题
    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    };

    return {theme, toggleTheme};
  },
};
</script>

<style scoped>

</style>