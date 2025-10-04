<script setup>
const props = defineProps({
  header: String,
  description: String,
})
</script>
<template>
  <div class="card-header-content">
    <h1 class="card-header-content__header">{{ props.header }}</h1>
    <p class="card-header-content__description">{{ props.description }}</p>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
@media (min-width: 320px) {
  .card-header-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.75em 0;
    padding-top: 5em;
    &__header {
      color: $blue-950;
      font-weight: $weight-300;
      text-align: center;
    }
    &__description {
      color: $gray-600;
      font-size: $primary-size;
      text-align: center;
    }
  }
}
@media (min-width: 768px){
  .card-header-content{
    grid-column: 1/3;
    &__header{
      font-size: 2.5rem;
    }
  }
}
@media (min-width: 992px) {
  .card-header-content {
    justify-content: start;
    align-items: start;
    padding: 0 1em;
    &__header {
      font-size: 3.125rem;
    }
  }
}
</style>
