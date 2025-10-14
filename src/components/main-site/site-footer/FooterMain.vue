<script setup>
import FooterSmMain from './footer-sm/FooterSmMain.vue'
import FooterRightsMain from './footer-rights/FooterRightsMain.vue'
import FooterNavMain from './footer-nav/FooterNavMain.vue';
</script>
<template>
  <footer class="footer-container" role="contentinfo">
    <FooterSmMain />
    <FooterNavMain />
    <FooterRightsMain />
  </footer>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .footer-container {
    @include flex-columns-items-center(3em);
    background-color: $blue-950;
    padding: 3em 1em;
  }
}
@media (min-width: $bp-desktop-medium){
  .footer-container {
    @include grid-container(3, 2em, 2em);
    align-items: stretch;
  }
}
@media (min-width: $bp-desktop-large){
  .footer-container{
    @include grid-container(14, 2em, 4em);
  
  }
}
@media (min-width: $bp-desktop-xl){
  .footer-container{
    @include grid-container(15, 4em, 2em);
  }
}
</style>
