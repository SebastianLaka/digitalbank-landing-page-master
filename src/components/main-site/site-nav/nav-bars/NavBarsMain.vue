<script setup>
import NavBarsItems from './NavBarsItems.vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const props = defineProps({
  isMobile: Boolean,
})
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
  <Transition name="slide-from-top">
    <div class="nav-bars-mobile-container" v-if="!store.mobileNav && store.isMobileWidth">
      <ul class="nav-bars-mobile">
        <NavBarsItems v-for="navItem in navItems" :key="navItem.id" :item="navItem.item" />
      </ul>
    </div>
  </Transition>
  <ul class="nav-bars-desktop" v-if="!store.isMobileWidth">
    <NavBarsItems v-for="navItem in navItems" :key="navItem.id" :item="navItem.item" />
  </ul>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;

@media (min-width: 320px) and (max-width: 991px) {
  .nav-bars-mobile-container {
    background: linear-gradient(
        to bottom,
        hsla(233, 26%, 24%, 0.5) 0%,
        hsla(233, 26%, 30%, 0.3) 70%,
        transparent 100%
    );
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    top: 5em;
    min-height: 100svh;
    padding: 2em 0;
    z-index: -10;
    backdrop-filter: blur(5px);
    .nav-bars-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2em;
      border-radius: .4em;
      width: 50%;
      gap: 1.5em;
      background-color: $white;
    }
  }
  .slide-from-top-enter-active,
  .slide-from-top-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  .slide-from-top-enter-from,
  .slide-from-top-leave-to {
    transform: translateY(-1100px);
  }
}

@media (min-width: 992px) {
  .nav-bars-desktop {
    display: flex;
    gap: 0 2em;
  }
}
</style>
