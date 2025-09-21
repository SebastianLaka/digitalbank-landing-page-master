<script setup>
import NavLogo from './NavLogo.vue'
import NavToggleIcon from './NavToggleIcon.vue'
import Logo from '@/components/icons/logo-dark.svg'
import hamburgerIcon from '@/components/icons/icon-hamburger.svg'
import closeMenuIcon from '@/components/icons/icon-close.svg'
const logoAttrs = {
  logo: Logo,
  alt: 'Digitalbank logo',
}
const navIcons = {
  hamburgerIcon: hamburgerIcon,
  closeIcon: closeMenuIcon,
  alt: 'Navigation icons which let for interaction',
}
</script>
<template>
  <nav class="nav-site">
    <div class="nav-container wrapper">
      <NavLogo :src="logoAttrs.logo" :alt="logoAttrs.alt" />
      <NavToggleIcon :src="navIcons.hamburgerIcon" :alt="navIcons.alt" />
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
    padding: 1em;
    border-bottom: 0.1em solid $gray-600;
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
    }
  }
}
</style>
