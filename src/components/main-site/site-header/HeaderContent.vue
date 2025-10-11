<script setup>
import RequestButton from '../RequestButton.vue'
const props = defineProps({
  header: String,
  content: String,
})
</script>
<template>
  <div class="header-content">
    <h1 class="header-content__header">{{ props.header }}</h1>
    <p class="header-content__description">{{ props.content }}</p>
    <RequestButton>Request Invite</RequestButton>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
@use '@/assets/sass/reset' as *;
@use '@/assets/sass/mixins' as *;

@media (min-width: 320px) {
  .header-content {
    @include flex-columns-items-center(1.5em, 0em);
    padding: 2em 1em;
    &__header,
    &__description {
      text-align: center;
    }
  }
}

@media (min-width: $bp-desktop-medium) {
  .header-content {
    @include grid-column(1, 8);
    grid-row: 1/2;
    align-items: start;
    &__header,
    &__description {
      text-align: left;
    }
  }
}
@media (min-width: $bp-desktop-large) {
  .header-content {
    @include grid-column(2, 7);
    padding: 0;
  }
}
@media (min-width: $bp-desktop-xl) {
  .header-content {
    @include grid-column(3, 8);
  }
}
@media (min-width: $bp-desktop-xxl) {
  .header-content {
    @include grid-column(3, 7);
    margin-bottom: 10em;
  }
}
</style>
