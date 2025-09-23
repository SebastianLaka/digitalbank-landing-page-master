<script setup>
import { onMounted } from 'vue'
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
  store.windowWidth = window.innerWidth;
};
onMounted(() => {
   window.addEventListener('resize', handleResize)
})


</script>
<template>
  <nav class="nav-site">
    <div class="nav-container wrapper">
      <NavLogo :src="logoAttrs.logo" :alt="logoAttrs.alt" />
      <NavToggleIcon :src="store.navIcon ? navIcons.hamburgerIcon : navIcons.closeIcon" :alt="navIcons.alt" @click="store.toggleMobileIcon" />
      <NavBarsMain/>
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
    padding: 1em;
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    }
  }
}

</style>