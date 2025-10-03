<script setup>
import OptionsHeader from './OptionsHeader.vue'
import OptionsCard from './OptionsCard.vue'
import iconOnline from "@/components/icons/icon-online.svg";
import iconBudgeting from "@/components/icons/icon-budgeting.svg";
import iconOnboarding from "@/components/icons/icon-onboarding.svg"
import iconApi from "@/components/icons/icon-api.svg";
const cardsHeaderContent = [
  {
    id: 1,
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
    description: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
  },
  {
    id: 3,
    src: iconOnboarding,
    alt: 'Opean easy accound and take control about your finances',
    header: 'Fast Onboarding',
    description: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    id: 3,
    src: iconApi,
    alt: 'Manage your all finanses like investments, pension and much more',
    header: 'Open API',
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
  }
]
</script>
<template>
  <section class="cards-main">
    <OptionsHeader
      v-for="cardContent in cardsHeaderContent"
      :key="cardContent.id"
      :header="cardContent.header"
      :description="cardContent.description"
    />
    <OptionsCard
      v-for="cardContent in cardsContent"
      :key="cardContent.id"
      :header="cardContent.header"
      :description="cardContent.description"
      :src="cardContent.src"
      :alt="cardContent.alt"
    />
  </section>
</template>
<style scoped lang="scss">
@media (min-width: 320px){
    .cards-main{
        display: flex;
        flex-direction: column;
        gap: 1.75em 0;
        padding: 0 .5em;
    }
}
</style>
