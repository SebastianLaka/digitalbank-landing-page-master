<script setup>
import MainComponent from './components/main-site/MainComponent.vue';
</script>
<template>
  <MainComponent/>
</template>

<style lang="scss">
@use '@/assets/sass/reset' as *;
@use '@/assets/sass/fonts' as *;
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/wrapper' as *;
body{
  font-family: "Public Sans", sans-serif;
  overflow: hidden;
}
</style>
