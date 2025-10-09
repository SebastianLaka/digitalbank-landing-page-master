<script setup>
import FooterSmMain from './footer-sm/FooterSmMain.vue'
</script>
<template>
  <footer class="footer-container">
    <FooterSmMain />
  </footer>
</template>
<style scoped lang="scss">
@use "@/assets/sass/colors" as *;
@media (min-width: 320px){
    .footer-container{
        background-color: $blue-950;
    }
}
</style>
