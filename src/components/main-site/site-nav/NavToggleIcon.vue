<script setup>
const props = defineProps({
    isToggle: Boolean,
    src: String,
    alt: String
})

</script>
<template>
    <img :src="props.src" :alt="props.alt" :isToggle="props.isToggle">
</template>
<style scoped lang="scss">
</style>