<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavLogo from './NavLogo.vue'
import NavToggleIcon from './NavToggleIcon.vue'
import NavBarsMain from './nav-bars/NavBarsMain.vue'
import RequestButton from '../RequestButton.vue'
import Logo from '@/components/icons/logo-dark.svg'
import hamburgerIcon from '@/components/icons/icon-hamburger.svg'
import closeMenuIcon from '@/components/icons/icon-close.svg'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()

const logoAttrs = {
  logo: Logo,
  alt: 'Digitalbank logo',
}
const navIcons = {
  hamburgerIcon: hamburgerIcon,
  closeIcon: closeMenuIcon,
  alt: 'Navigation icons which let for interaction',
}
const handleResize = () => {
  store.windowWidth = window.innerWidth
}
onMounted(() => {
  store.toggleMobileNavMenu()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => {
  store.toggleMobileNavMenu()
  window.removeEventListener('resize', handleResize)
})
</script>
<template>
  <nav class="nav-site">
    <div class="nav-container">
      <NavLogo :src="logoAttrs.logo" :alt="logoAttrs.alt" />
      <NavBarsMain />
      <NavToggleIcon
        :src="store.navIcon ? navIcons.hamburgerIcon : navIcons.closeIcon"
        :alt="navIcons.alt"
        @click="store.toggleMobileNavMenu"
      />
      <RequestButton v-if="!store.isMobileWidth">Request Invite</RequestButton>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .nav-site {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white;
    z-index: 500;
    .nav-container {
      @include flex-row-center-between;
      position: relative;
      padding: 2em 1em;
    }
  }
}
@media (min-width: $bp-desktop-medium) {
  .nav-site {
    @include grid-container(14, 0, 1);
    .nav-container {
      @include grid-column(1, 15);
      padding: 1.5em 1em;
    }
  }
}
@media (min-width: $bp-desktop-large) {
  .nav-site {
    gap: 0;
    .nav-container {
      grid-column: 2/14;
      @include grid-column(2, 14);
      padding: 1.5em 0;
    }
  }
}
@media (min-width: $bp-desktop-xl) {
  .nav-site {
    @include grid-container(16, 0, 0);
    .nav-container {
      @include grid-column(3, 15);
    }
  }
}
</style>
