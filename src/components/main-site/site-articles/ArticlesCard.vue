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

@media (min-width: 320px) {
  .article-card {
    @include flex-columns-items-center(1.75em, 0);
    &__image {
      @include image-display;
    }
    .article-card-content {
    @include flex-column(1.75em, 0);
    padding: 0 2em;
      
    }
  }
}
</style>
