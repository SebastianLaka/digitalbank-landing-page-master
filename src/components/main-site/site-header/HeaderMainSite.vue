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
@media (min-width: 320px) {
  .header-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2em 0;
    height: 100svh;
    .header-image-content{
      width: 100%;
    }
  }
}
@media (min-width: 992px) {
  .header-main {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    align-items: center;
    align-content: center;
    
    .header-image-content {
      grid-column: 8/15;
      z-index: 1;
      overflow-x: hidden;
    }
    .request-button {
      grid-column: 1/2;
    }
    padding-bottom: 1em;
  }
}
</style>
