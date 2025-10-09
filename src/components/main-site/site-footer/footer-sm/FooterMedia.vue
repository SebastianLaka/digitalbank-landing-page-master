<script setup>
const props = defineProps({
    src: String,
    alt: String,
})
</script>
<template>
    
        <a href="#" class="footer-media__item"><img :src="props.src" :alt="props.alt"></a>
  
    
</template>
<style scoped lang="scss">
// @use "@/assets/sass/mixins" as *;
// @media (min-width: 320px){
//     .footer-media{
//         @include flex-row(1em, 1em);
//     }  
// }
</style>
