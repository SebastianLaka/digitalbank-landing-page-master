<script setup>
import HeaderBackgroundImage from './HeaderBackgroundImage.vue'
import bgIntroMobile from '@/assets/images/bg-intro-mobile.svg'
import bgIntroDesktop from '@/assets/images/bg-intro-desktop.svg'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
const props = defineProps({
  src: String,
  alt: String,
})
</script>
<template>
  <div class="header-site-background">
    <img :src="props.src" :alt="props.alt" class="header-site-background__image" />
    <HeaderBackgroundImage :src="store.isMobileWidth ? bgIntroMobile : bgIntroDesktop" />
  </div>
</template>
<style scoped lang="scss">
@media (min-width: 320px) {
  .header-site-background {
    position: relative;
    &__image {
      display: block;
      width: 100%;
    }
  }
}
@media (min-width: 992px) {
  .header-site-background {
    &__image {
      position: relative;
      min-width: 80%;
      top: -1em;
      right: -6em;
    }
  }
}
</style>
