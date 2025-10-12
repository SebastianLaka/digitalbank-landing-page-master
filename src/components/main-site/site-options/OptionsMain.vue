<script setup>
import OptionsHeader from './OptionsHeader.vue'
import OptionsCard from './OptionsCard.vue'
import iconOnline from '@/components/icons/icon-online.svg'
import iconBudgeting from '@/components/icons/icon-budgeting.svg'
import iconOnboarding from '@/components/icons/icon-onboarding.svg'
import iconApi from '@/components/icons/icon-api.svg'
const cardsHeaderContent = [
  {
    header: 'Why choose Digitalbank?',
    description:
      'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.',
  },
]
const cardsContent = [
  {
    id: 1,
    src: iconOnline,
    alt: 'Online banking card to easy manage your moenys',
    header: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world',
  },
  {
    id: 2,
    src: iconBudgeting,
    alt: 'You can easy see where your moneys goes, get notifications, limits etc.',
    header: 'Simple Budgeting',
    description:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    id: 3,
    src: iconOnboarding,
    alt: 'Opean easy accound and take control about your finances',
    header: 'Fast Onboarding',
    description:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    id: 4,
    src: iconApi,
    alt: 'Manage your all finanses like investments, pension and much more',
    header: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
]
</script>
<template>
  <section class="cards-main">
    <OptionsHeader
      :header="cardsHeaderContent[0].header"
      :description="cardsHeaderContent[0].description"
    />
    <OptionsCard
      v-for="cardContent in cardsContent"
      :key="cardContent.id"
      :header="cardContent.header"
      :description="cardContent.description"
      :src="cardContent.src"
      :alt="cardContent.alt"
      :class="`card-${cardContent.id}`"
    />
  </section>
</template>
<style scoped lang="scss">
@use "@/assets/sass/mixins" as *;
@media (min-width: 320px) {
  .cards-main {
    @include flex-column(1.75em, 0);
    padding: 0 1em;
  }
}
@media (min-width: $bp-tablet) {
  .cards-main {
    @include grid-container(2, 4em);
    align-items: start;
  }
}
@media (min-width: $bp-desktop-large) {
  .cards-main {
    @include grid-container(14, 4em, 4em);
    grid-template-rows: auto auto;
    padding: 0;
    .card-1{
      @include grid-column(2, 8);
      grid-row: 2/2;
    }
    .card-2{
      @include grid-column(8, 14);
      grid-row: 2/2;
    }
    .card-3{
      @include grid-column(2,8);
      grid-row: 3/3;
    }
    .card-4{
      @include grid-column(8, 14);
      grid-row: 3/3;
    }
  }
}
@media (min-width: $bp-desktop-xl) {
  .cards-main {
    @include grid-container(16, 4em, 6em);
    .card-1 {
      @include grid-column(3, 6);
    }
    .card-2 {
      @include grid-column(6, 9);
    }
    .card-3 {
      @include grid-column(9, 12);
      grid-row: 2/2;
    }
    .card-4 {
      @include grid-column(12, 15);
      grid-row: 2/2;
    }
  }
}
</style>
