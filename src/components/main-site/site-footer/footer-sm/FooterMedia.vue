<script setup>
const props = defineProps({
    src: String,
    alt: String,
})
</script>
<template>
    <a href="#"><img :src="props.src" :alt="props.alt"></a>
</template>
<style scoped lang="scss">
</style>