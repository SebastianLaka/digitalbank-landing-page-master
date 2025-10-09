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
    @include grid-column(1, 3);
  }
}
@media (min-width: $bp-desktop-medium) {
  .articles-header {
    @include grid-column(1, 3);
    text-align: start;
    padding: 1em 0;
  }
}
@media (min-width: $bp-desktop-large) {
  .articles-header {
    @include grid-column(2, 6);
  }
}
@media (min-width: $bp-desktop-xl) {
  .articles-header {
    @include grid-column(3, 10);
  }
}
</style>
