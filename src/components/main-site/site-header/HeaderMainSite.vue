<script setup>
import HeaderContent from './HeaderContent.vue'
import RequestButton from '../RequestButton.vue'
const headerContentData = [
  {
    id: 1,
    header: 'Next generation digital banking',
  },
  {
    id: 2,
    content: 'Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'
  }
]
</script>
<template>
  <HeaderContent v-for="headerContent in headerContentData" :key="headerContent.id" :header="headerContent.header" :content="headerContent.content"/>
  <RequestButton>Request Invite</RequestButton>
</template>
<style scoped lang="scss"></style>
