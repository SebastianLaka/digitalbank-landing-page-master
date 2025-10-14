<script setup>
const props = defineProps({
  item: String,
})
</script>
<template>
  <ul>
    <li>
      <a href="#" class="nav-item">{{ props.item }}</a>
    </li>
  </ul>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .nav-item {
    position: relative;
    color: $blue-950;
    padding: 0 0 1em 0;
  }
}
@media (min-width: $bp-desktop-medium) {
  .nav-item {
    @include nav-highlight;
    color: $gray-600;
    transition: color .5s ease-in-out;
    &:hover{
      color: $blue-950;
    }
  }
}
</style>
