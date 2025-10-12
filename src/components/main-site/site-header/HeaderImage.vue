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
const backgroundImageAttr = 'Special image for header visual';
</script>
<template>
  <div class="header-site-background">
    <img :src="props.src" :alt="props.alt" class="header-site-background__image" />
    <HeaderBackgroundImage :src="store.isMobileWidth ? bgIntroMobile : bgIntroDesktop" :alt="backgroundImageAttr"/>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .header-site-background {
    position: relative;
    &__image {
      @include image-display;
    }
  }
}
@media (min-width: $bp-desktop-medium) {
  .header-site-background {
    &__image {
      position: relative;
      min-width: 120%;
      top: 0;
      right: -2em;
    }
  }
}
@media (min-width: $bp-desktop-large) {
  .header-site-background {
    &__image {
      min-width: 110%;
      top: -3em;
      right: -6em;
    }
  }
}
@media (min-width: $bp-desktop-xl) {
  .header-site-background {
    &__image {
      min-width: 100%;
      top: -7em;
      right: -9em;
    }
  }
}
</style>
