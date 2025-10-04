import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const navIcon = ref(false)
  const navButton = ref(true)
  const mobileNav = ref(false)
  const windowWidth = ref(window.innerWidth)
  const isMobileWidth = computed(() => windowWidth.value < 992)
  const toggleMobileNavMenu = () => {
    navIcon.value = !navIcon.value
    mobileNav.value = !mobileNav.value
  }
  return {
    navIcon,
    navButton,
    mobileNav,
    windowWidth,
    isMobileWidth,
    toggleMobileNavMenu,
  }
})
