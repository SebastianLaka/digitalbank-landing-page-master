<template>
  <button class="request-button"><slot /></button>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
.request-button {
  background: $gradient;
  padding: 1em 2em;
  border-radius: 2em;
  transition: filter 0.5s ease;

  &:hover {
    filter: brightness(1.5);
  }
  &:active {
    filter: brightness(0.9);
  }
}
</style>
