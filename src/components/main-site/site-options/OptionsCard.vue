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
@media (min-width: 320px) {
  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.75em 0;
  
    &__header {
      color: $blue-950;
      font-weight: $weight-300;
    }
    &__description {
      color: $gray-600;
      font-size: $primary-size;
      text-align: center;
    }
  }
}
</style>
