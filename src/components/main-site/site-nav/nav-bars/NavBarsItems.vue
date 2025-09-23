<script setup>
const props = defineProps({
  item: String,
})
</script>
<template>
  <li >
    <a href="#" class="nav-item">{{ props.item }}</a>
  </li>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@media (min-width: 320px) {


    .nav-item {
      padding: 0.5em;
      position: relative;
      &::before {
        position: absolute;
        content: '';
        bottom: -70%;
        left: 0;
        right: 0;
        height: 0.2em;
        opacity: 0;
        transition:
          background-color 0.3s ease-in-out,
          opacity 0.3s ease-in-out;
      }
      &:hover::before {
        background-color: $green-500;
        opacity: 1;
      }
    }
  }

</style>
