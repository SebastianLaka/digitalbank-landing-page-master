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
    @include flex-column;
    gap: 1.75em 0;
    padding: 0 1em;
  }
}
@media (min-width: 768px) {
  .cards-main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: start;
    gap: 2em 4em;
  }
}
@media (min-width: 992px) {
  .cards-main {
    grid-template-columns: repeat(14, 1fr);
    grid-template-rows: auto auto;
    gap: 4rem 2em;
    .card-1 {
      grid-column: 1 / 4;
      grid-row: 2;
    }
    .card-2 {
      grid-column: 4 / 8;
      grid-row: 2;
    }
    .card-3 {
      grid-column: 8 /  12;
      grid-row: 2;
    }
    .card-4 {
      grid-column: 12 / 16;
      grid-row: 2;
    }
  }
}
@media (min-width: 1100px) {
  .cards-main {
    gap: 4em 1.25em;
    padding: 0;
    .card-1 {
      grid-column: 2 / 5;
    }
    .card-2 {
      grid-column: 5 / 8;
      
    }
    .card-3 {
      grid-column: 8 / 11;
    }
    .card-4 {
      grid-column: 11 / 14;
     
    }
  }
}
@media (min-width: 1250px) {
  .cards-main {
    grid-template-columns: repeat(16, 1fr);
    gap: 4em 2em;
    .card-1 {
      grid-column: 3 / 6;
    }
    .card-2 {
      grid-column: 6/ 9;
    }
    .card-3 {
      grid-column: 9 / 12;
    }
    .card-4 {
      grid-column: 12 / 15;
    }
  }
}
</style>
