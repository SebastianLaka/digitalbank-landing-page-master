<script setup>
import FooterSmMain from './footer-sm/FooterSmMain.vue'
import FooterRightsMain from './footer-rights/FooterRightsMain.vue'
</script>
<template>
  <footer class="footer-container">
    <FooterSmMain />
    <FooterRightsMain />
  </footer>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .footer-container {
    @include flex-columns-items-center(1em);
    background-color: $blue-950;
  }
}
</style>
