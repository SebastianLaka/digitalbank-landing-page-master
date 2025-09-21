<script setup>
const props = defineProps({
    item: String
})
</script>
<template>
        <li><a href="#" class="nav-item">{{props.item}}</a></li>
</template>
<style scoped lang="scss">
@media (min-width: 320px){
    .nav-item{
        padding: .5em;
    }
}
</style>