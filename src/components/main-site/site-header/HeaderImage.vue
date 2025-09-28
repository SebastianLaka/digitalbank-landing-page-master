<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <div class="header-site-background">
    <img :src="props.src" :alt="props.alt" class="image" />
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 320px) {
  .header-site-background {
    .image {
      position: relative;
      width: 100%;
      object-fit: contain;
    }
  }
}
@media (min-width: 992px) {
  .header-site-background {
    .image {
      left: 15%;
      top: 1em;
    }
  }
}
</style>
