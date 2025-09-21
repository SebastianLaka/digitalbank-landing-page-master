<script setup></script>

<template>
  <div class="check wrapper">
    <p>Hello</p>
    <p>hello2</p>
  </div>
</template>

<style lang="scss">
@use '@/assets/sass/reset' as *;
@use '@/assets/sass/fonts' as *;
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/wrapper' as *;
.check {
    display: flex;
    justify-content: space-between;
  p {
    font-family: 'Public Sans', sans-serif;
  }
}
</style>
