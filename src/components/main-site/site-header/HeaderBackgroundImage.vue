<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <div class="header-background-intro">
    <img :src="props.src" :alt="props.alt" class="header-background-intro__image" />
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 320px) {
  .header-background-intro {
    &__image {
      display: block;
      width: 100%;
      position: absolute;
      inset: 4em 0 0 0;
     
      max-height: 100%;
      z-index: -1;
    }
  }
}
</style>
