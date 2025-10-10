<script setup>
const props = defineProps({
    src: String,
    alt: String,
})

</script>
<template>
    <img :src="props.src" :alt="props.alt" class="footer-logo">
</template>
<style scoped lang="scss">
@media (min-width: 320px){
    .footer-logo{
        width: 13em;
    }
}
</style>