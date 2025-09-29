<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <div class="header-site-background">
    <img :src="props.src" :alt="props.alt" class="header-site-background__image" />
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 320px) {
  .header-site-background {
    &__image {
      position: relative;
      width: 100%;
      object-fit: cover;
      top: -7em;
    }
  }
}
@media (min-width: 992px) {
  .header-site-background {
    &__image {
      left: 15%;
      top: 1em;
    }
  }
}
</style>
