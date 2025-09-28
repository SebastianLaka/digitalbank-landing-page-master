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
@media (min-width: 320px) {
  .header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    gap: 1.5em 0;
    text-align: center;
    &__header {
      color: $blue-950;
      font-weight: $weight-300;
    }
    &__description {
      color: $gray-600;
      line-height: 150%;
    }
  }
}
@media (min-width: 992px) {
  .header-content {
    grid-column: 3/8;
    grid-row: 1/2;
    align-items: start;
    padding: 0 1em 0 0;
    &__header,
    &__description{
      text-align: left;
      font-size: 2.25rem;
      line-height: 150%;
    }
    &__description{
      font-size: $primary-size;
    }
  }
}
</style>
