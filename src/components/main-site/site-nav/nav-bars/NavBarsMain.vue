<script setup>
import NavBarsItems from './NavBarsItems.vue'
const navItems = [
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
]
</script>
<template>
  <ul class="nav-bars">
    <NavBarsItems v-for="navItem in navItems" :key="navItem.id" :item="navItem.item" />
  </ul>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@media (min-width: 320px) and (max-width: 991px) {
  .nav-bars {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 3em 0;
    gap: 1.5em;
    border-radius: .4em;
    border: .1em solid $gray-600;
  }
}
@media (min-width: 992px) {
  .nav-bars {
    display: flex;
    gap: 0 2em;
  }
}
</style>
