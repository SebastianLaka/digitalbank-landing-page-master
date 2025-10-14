<script setup>
const props = defineProps({
  src: String,
  alt: String
})
</script>
<template>
  <img :src="props.src" :alt="props.alt" class="header-background-intro-image" />
</template>
<style scoped lang="scss">
@use '@/assets/sass/reset' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .header-background-intro-image {
    @include image-display;
    position: absolute;
    inset: 0;
    min-height: 100%;
    z-index: -1;
  }
}
@media (min-width: $bp-desktop-medium) {
  .header-background-intro-image {
    top: -12em;
    left: -2em;
    min-width: 150%;
    object-fit: contain;
  }
}
</style>
