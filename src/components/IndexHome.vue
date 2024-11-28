<template>
  <div class="wow animate__animated animate__zoomIn">这是demo页， {{newTheme}}</div>
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
</style>
