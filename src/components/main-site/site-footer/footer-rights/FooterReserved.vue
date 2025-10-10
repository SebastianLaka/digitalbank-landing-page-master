<script setup></script>
<template>
    <p class="footer-description-paragraph"><slot/></p>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@media (min-width: 320px){
    .footer-description-paragraph{
        color: $gray-600;
        font-size: 1rem;
    }
}
</style>