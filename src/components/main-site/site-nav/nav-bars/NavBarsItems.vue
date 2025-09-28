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
@media (min-width: 320px){
  .nav-item {
    position: relative;
    color: $blue-950;
    padding: 0 0 1em 0;
  }
}
@media (min-width: 992px) {
  .nav-item {
    color: $gray-600;
    &::before {
      position: absolute;
      content: '';
      bottom: -70%;
      left: 0;
      right: 0;
      height: 0.2em;
      opacity: 0;
      transition:
        background-color .5s ease-in-out,
        opacity .5s ease-in-out;
    }
    &:hover::before {
      background-color: $green-500;
      opacity: 1;
    }
  }
}
</style>