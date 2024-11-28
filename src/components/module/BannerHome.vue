<template>
  <div class="banner">
    1234455
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      newTheme: ''
    };
  },
  computed: {
    ...mapState(['theme'])
  },
  watch: {
    theme(newThemeValue) {
      this.newTheme = newThemeValue;
    }
  },
  created() {
    this.newTheme = this.theme;
  }
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>