<script setup>
import FooterNav from './FooterNav.vue'
const footerItems = [
  {
    id: 1,
    item: 'Home',
  },
  {
    id: 2,
    item: 'About',
  },
  {
    id: 3,
    item: 'Contact',
  },
  {
    id: 4,
    item: 'Blog',
  },
  {
    id: 5,
    item: 'Careers',
  },
  {
    id: 6,
    item:'Privacy Policy'
  }
]
</script>
<template>
  <div class="footer-nav-container">
    <FooterNav v-for="footerItem in footerItems" :key="footerItem.id" :item="footerItem.item" />
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .footer-nav-container {
    @include flex-columns-items-center(2em);
  }
}
@media (min-width: $bp-tablet){
    .footer-nav-container {
    @include grid-container(2, 2em , .5em);
    align-items: center;
  }
}
</style>
