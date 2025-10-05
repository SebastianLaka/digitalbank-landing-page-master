<script setup>
const props = defineProps({
  src: String,
  alt: String,
  header: String,
  description: String,
})
</script>
<template>
  <div class="card-content">
    <img :src="props.src" :alt="props.alt" class="card-content__icon" />
    <h2 class="card-content__header">{{ props.header }}</h2>
    <p class="card-content__description">{{ props.description }}</p>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .card-content {
    @include flex-columns-items-center;
    gap: 1.75em 0;
    &__description {
      text-align: center;
    }
  }
}
@media (min-width: 768px) {
  .card-content {
    justify-self: center;
  }
}
@media (min-width: 992px) {
  .card-content {
    align-items: start;
    grid-row: 2/ -1;
    &__description {
      text-align: left;
    }
  }
}
</style>
