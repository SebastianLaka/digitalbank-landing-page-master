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
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .card-header-content {
    @include flex-columns-items-center(1.75em, 0);
    padding-top: 5em;
    &__header,
    &__description {
      text-align: center;
    }
  }
}
@media (min-width: $bp-tablet) {
  .card-header-content {
    @include grid-column(1, 3);
    &__header {
      font-size: 2.5rem;
    }
  }
}
@media (min-width: $bp-desktop-medium) {
  .card-header-content {
    align-items: start;
    @include grid-column(1, 11);
    grid-row: 1/2;
    padding: 0;
    &__header {
      font-size: 2.5rem;
    }
    &__description {
      text-align: left;
    }
  }
}
@media (min-width: $bp-desktop-large) {
  .card-header-content {
    @include grid-column(2, 11);
  }
}
@media (min-width: $bp-desktop-xl) {
  .card-header-content {
    @include grid-column(3, 10);
  }
}
</style>
