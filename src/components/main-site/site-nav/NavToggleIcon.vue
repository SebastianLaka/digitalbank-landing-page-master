<script setup>
const props = defineProps({
  isToggle: Boolean,
  src: String,
  alt: String,
})
</script>
<template>
  <button class="nav-button">
    <img :src="props.src" :alt="props.alt" :isToggle="props.isToggle" class="nav-icon" />
  </button>
</template>
<style scoped lang="scss">
@use '@/assets/sass/reset' as *;
.nav-button{
    background-color: transparent;
    border: none;
    padding: .5em;
}
</style>
