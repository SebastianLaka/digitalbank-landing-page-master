<template>
  <h1 class="articles-header"><slot /></h1>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .articles-header {
    font-size: 2.5rem;
    color: $blue-950;
    text-align: center;
    @include grid-column(1,3);
  }
}
@media (min-width: $bp-desktop-medium) {
  .articles-header {
    grid-row: 1/2;
    @include grid-column(1, 3);
    text-align: start;
  }
}
</style>
