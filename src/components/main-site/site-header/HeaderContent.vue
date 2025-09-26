<script setup>

const props = defineProps({
  header: String,
  content: String,
})
</script>
<template>
  <div class="header-content">
    <h1>{{ props.header }}</h1>
    <p>{{ props.content }}</p>
  </div>
</template>
<style scoped lang="scss"></style>
