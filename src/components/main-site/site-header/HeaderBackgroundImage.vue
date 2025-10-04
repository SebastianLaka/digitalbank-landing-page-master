<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <img :src="props.src" :alt="props.alt" class="header-background-intro-image" />
</template>
<style scoped lang="scss">
@use '@/assets/sass/reset' as *;
@media (min-width: 320px) {
  .header-background-intro-image {
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    min-height: 100%;
    z-index: -1;
  }
}
@media (min-width: 992px) {
  .header-background-intro-image {
    top: -12em;
    left: -2em;
    min-width: 150%;
    object-fit: contain;
  }
}
</style>
