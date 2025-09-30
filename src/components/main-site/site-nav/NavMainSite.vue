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
@media (min-width: 320px) {
  .nav-site {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $white;
    z-index: 500;
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      padding: 2em 1em;
    }
  }
}
@media (min-width: 992px) {
  .nav-site {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    gap: 0 1em;
    .nav-container {
      grid-column: 1/15;
      padding: 1.5em 1em;
    }
  }
}
@media (min-width: 1100px) {
  .nav-site {
    .nav-container {
      grid-column: 2/14;
    }
  }
}
@media (min-width: 1250px) {
  .nav-site {
    .nav-container {
      grid-column: 3/13;
    }
  }
}
</style>
