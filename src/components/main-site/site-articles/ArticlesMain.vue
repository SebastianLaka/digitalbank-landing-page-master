<script setup>
import ArticlesHeader from './ArticlesHeader.vue'
import ArticlesCard from './ArticlesCard.vue'
import ImageCurrency from '@/assets/images/image-currency.jpg'
import ImageRestaurant from '@/assets/images/image-restaurant.jpg'
import ImagePlane from '@/assets/images/image-plane.jpg'
import ImageConfetti from '@/assets/images/image-confetti.jpg'

const articlesCardData = [
  {
    id: 1,
    image: ImageCurrency,
    alt: 'Image with moneys',
    signature: 'Clara Robinson',
    header: 'Receive money in any currency with no fees',
    description:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    id: 2,
    image: ImageRestaurant,
    alt: 'Image with restaurant',
    signature: 'Wilson Hutton',
    header: 'Treat yourself without worrying about money',
    description:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    id: 3,
    image: ImagePlane,
    alt: 'Image with plane',
    signature: 'Wilson Hutton',
    header: 'Take your Digitalbank card wherever you go',
    description:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    id: 4,
    image: ImageConfetti,
    alt: 'Image with plane',
    signature: 'Clara Robinson',
    header: 'Our invite-only Beta accounts are now live!',
    description:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
]
</script>
<template>
  <section class="articles-container">
    <ArticlesHeader>Latest Articles</ArticlesHeader>
    <ArticlesCard
      v-for="articleCard in articlesCardData"
      :key="articleCard.id"
      :src="articleCard.image"
      :alt="articleCard.alt"
      :signature="articleCard.signature"
      :header="articleCard.header"
      :description="articleCard.description"
    />
  </section>
</template>
<style scoped lang="scss">
@use '@/assets/sass/mixins' as *;
@media (min-width: 320px) {
  .articles-container{
    @include flex-column(1.75em, 0);
    padding-top: 8em;
  }
}
</style>
