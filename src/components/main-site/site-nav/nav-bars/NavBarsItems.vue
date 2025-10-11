<script setup>
const props = defineProps({
  item: String,
})
</script>
<template>
  <li>
    <a href="#" class="nav-item">{{ props.item }}</a>
  </li>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px){
  .nav-item {
    position: relative;
    color: $blue-950;
    padding: 0 0 1em 0;
  }
}
@media (min-width: $bp-desktop-medium) {
  .nav-item {
    @include nav-highlight;
  }
}
</style>