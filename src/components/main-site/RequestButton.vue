<script setup>
</script>

<template>
<button class="request-button"><slot /></button>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/fonts' as *;
.request-button{
    background: linear-gradient((25deg,),$cyan-400 ,$green-500);
    color: $white;
    padding: 1em 2em;
    border-radius: 2em;
    border: none;
    font-weight: $weight-400;
}
</style>