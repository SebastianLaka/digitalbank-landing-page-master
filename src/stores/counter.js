import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const navIcon = ref(true)
  const toggleMobileIcon = () => {
    navIcon.value = !navIcon.value
  }
  return { navIcon, toggleMobileIcon }
})
