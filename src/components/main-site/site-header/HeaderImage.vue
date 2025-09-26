<script setup>
const props = defineProps({
    src: String,
    alt: String
})
</script>
<template>
    <img :src="props.src" :alt="props.alt" class="header-site-image">
</template>
<style scoped lang="scss">
.header-site-image{
    display: block;
    width: 100%;
}
</style>