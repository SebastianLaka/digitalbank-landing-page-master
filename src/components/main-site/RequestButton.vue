<script setup>
</script>

<template>
<button class="request-button"><slot /></button>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
.request-button{
    background: $gradient;
    color: $white;
    padding: 1em 2em;
    border-radius: 2em;
    font-weight: $weight-400;
}
</style>