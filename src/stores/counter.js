import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const navIcon = ref(true);
  const navButton = ref(true);
  const windowWidth = ref(window.innerWidth);
  const isMobileWidth = computed(() => windowWidth.value < 992);
  
  const toggleMobileIcon = () => {
    navIcon.value = !navIcon.value
  }
  return { navIcon, toggleMobileIcon, navButton, windowWidth, isMobileWidth }
})
