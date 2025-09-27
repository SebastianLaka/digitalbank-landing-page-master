<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <div class="header-site-background">
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 320px) {
  .header-site-background {
    background-size: contain;
    background-image: url("@/assets/images/image-mockups.png");
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    min-height: 100svh;
    width: 100%;
  }
}
@media (min-width: 992px) {
  .header-site-background {
    background-size: cover;
    grid-column: 8/15;
    background-position: 150px -100px;
    min-height: 100svh;
    min-width: 20%;
  }
}
</style>
