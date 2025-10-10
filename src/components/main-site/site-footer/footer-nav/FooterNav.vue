<script setup>
const props = defineProps({
  item: String,
})
</script>
<template>
  <li>
    <a href="#" class="footer-item">{{ props.item }}</a>
  </li>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .footer-item {
    color: $white;
    font-size: 1rem;
    transition: color 0.5s ease-in-out;
    &:hover {
      color: $green-500;
    }
  }
}

</style>
