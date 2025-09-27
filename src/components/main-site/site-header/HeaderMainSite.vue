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
    <HeaderImage />
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
    min-height: 100svh;
  }
}
@media (min-width: 992px) {
  .header-main {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: 1fr;

    position: relative;
    gap: 0 5em;
    .request-button {
      grid-column: 1/2;
    }
  }
}
</style>
