<script setup>
const props = defineProps({
    src: String,
    alt: String,
    signature: String,
    header: String,
    description: String
})
</script>
<template>
<div class="article-card">
    <img :src="props.src" :alt="props.alt" class="article-card__image">
    <p class="article-card__signature">By {{ props.signature }}</p>
    <h2 class="article-card__header">{{ props.header }}</h2>
    <p class="article-card__description">{{ props.description }}</p>
</div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/colors' as *;
@use '@/assets/sass/mixins' as *;
</style>
