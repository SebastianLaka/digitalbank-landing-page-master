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
    alt: 'Navigation icons which let for interaction'
}
</script>
<template>
  <nav class="nav-site wrapper">
    <NavLogo :src="logoAttrs.logo" :alt="logoAttrs.alt" />
    <NavToggleIcon :src="navIcons.hamburgerIcon" :alt="navIcons.alt"/>
  </nav>
</template>
<style scoped lang="scss">
@media (min-width: 320px){
    .nav-site{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
