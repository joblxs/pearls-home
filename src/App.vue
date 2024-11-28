<template>
  <!--实时监测fps-->
  <FpsCounter />
  <router-view />
</template>

<script>
import FpsCounter from './utils/FpsCounter.vue'

export default {
  name: 'App',
  components: {
    FpsCounter,
  },
}
</script>

<style>
</style>
