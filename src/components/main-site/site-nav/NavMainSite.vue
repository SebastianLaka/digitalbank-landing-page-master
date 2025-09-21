<script setup>
import NavLogo from './NavLogo.vue';
import Logo from "@/components/icons/logo-dark.svg"

const logoAttrs = {
    logo: Logo,
    alt: 'Digitalbank logo'
}

</script>
<template>
    <NavLogo :src="logoAttrs.logo" :alt="logoAttrs.alt"/>
</template>
<style scoped lang="scss">
</style>