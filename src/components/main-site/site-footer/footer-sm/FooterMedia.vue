<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
<a href="#" class="footer-media-link">
  <img :src="props.src" :alt="props.alt" class="footer-media-item" />
</a>
</template>
<style scoped lang="scss">
@use '@/assets/sass/fonts' as *;
@use '@/assets/sass/mixins' as *;
@use '@/assets/sass/colors' as *;
@media (min-width: 320px) {
  .footer-media-item {
    width: 2em;
    height: 2em;
  }
}
@media (min-width: $bp-desktop-medium) {
  .footer-media-item {
    width: 1.5em;
    height: 1.5em;
  }
}
</style>
