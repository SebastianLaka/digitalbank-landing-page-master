<script setup>
const props = defineProps({
  src: String,
  alt: String,
  signature: String,
  header: String,
  description: String,
})
</script>
<template>
  <div class="article-card">
    <img :src="props.src" :alt="props.alt" class="article-card__image" />
    <div class="article-card-content">
      <p class="article-card-content__signature">By {{ props.signature }}</p>
      <h2 class="article-card-content__header">{{ props.header }}</h2>
      <p class="article-card-content__description">{{ props.description }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@use '@/assets/sass/fonts' as *;

@media (min-width: 320px) {
  .article-card {
    @include flex-columns-items-center(1.75em, 0);
    &__image {
      width: 100%;
      height: 40svh;
      object-fit: cover;
      border-top-left-radius: 0.4em;
      border-top-right-radius: 0.4em;
    }
    .article-card-content {
      @include flex-column(1.75em, 0);
      padding: 0 1.25em;
      &__signature {
        font-size: 0.875rem;
      }
      &__header{
        cursor: pointer;
        transition: color .5s ease-in-out;
        &:hover{
          color: $green-500;
        }
      }
      &__header,
      &__description {
        font-size: $primary-size;
      }
    }
  }
}
@media (min-width: $bp-desktop-medium) {
  .article-card {
    &__image {
      height: 25svh;
    }
  }
}
</style>
