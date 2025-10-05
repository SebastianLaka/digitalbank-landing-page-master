<script setup>
import HeaderContent from './HeaderContent.vue'
import HeaderImage from './HeaderImage.vue'
import ImageMockups from '@/assets/images/image-mockups.png'

const headerContentData = [
  {
    id: 1,
    header: 'Next generation digital banking',
    content:
      'Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.',
  },
]
</script>
<template>
  <header class="header-main">
    <div class="header-image-content">
      <HeaderImage :src="ImageMockups" />
    </div>
    <HeaderContent
      v-for="headerContent in headerContentData"
      :key="headerContent.id"
      :header="headerContent.header"
      :content="headerContent.content"
    />
  </header>
</template>
<style scoped lang="scss">
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .header-main {
    @include flex-columns-items-center(0);
    height: 100%;
    .header-image-content {
      width: 100%;
    }
  }
}
@media (min-width: $bp-desktop-medium) {
  .header-main {
    @include grid-container(14);
    align-items: center;
    align-content: center;
    overflow-x: hidden;
    .header-image-content {
      grid-column: 9/17;
      z-index: 1;
    }
    .request-button {
      grid-column: 1/2;
    }
  }
}
@media (min-width: $bp-desktop-xl) {
  .header-main {
    @include grid-container(16);
  }
}
</style>
