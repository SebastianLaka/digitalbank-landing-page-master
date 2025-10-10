<script setup>
import RequestButton from '../../RequestButton.vue'
import FooterReserved from './FooterReserved.vue'
</script>
<template>
  <div class="footer-rights">
    <RequestButton>Request Invite</RequestButton>
    <FooterReserved>© Digitalbank. All Rights Reserved</FooterReserved>
  </div>
</template>
<style scoped lang="scss">
@use '@/assets/sass/mixins' as *;

@media (min-width: 320px) {
  .footer-rights {
    @include flex-columns-items-center(3em, 0);
  }
}
@media (min-width: $bp-tablet){
    .footer-rights {
    @include flex-columns-items-end(2.5em, 0);
  }
}
</style>
