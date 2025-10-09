<script setup>
import FooterLogo from './FooterLogo.vue'
import FooterMedia from './FooterMedia.vue'
import Logo from '@/components/icons/logo-light.svg'
import FacebookIcon from '@/components/icons/icon-facebook.svg'
import YoutubeIcon from '@/components/icons/icon-youtube.svg'
import TwitterIcon from '@/components/icons/icon-twitter.svg'
import PinterestIcon from '@/components/icons/icon-pinterest.svg'
import InstagramIcon from '@/components/icons/icon-instagram.svg'

const logoAttrs = {
  logo: Logo,
  alt: 'Digitalbank logo',
}
const socialMediaIcons = [
  {
    id: 1,
    icon: FacebookIcon,
    alt: 'Facebook icon'
  },
  {
    id: 2,
    icon: YoutubeIcon,
    alt: 'Youtube icon'
  },
  {
    id: 3,
    icon: TwitterIcon,
    alt: 'Twitter icon'
  },
  {
    id: 4,
    icon: PinterestIcon,
    alt: 'Pinterest icon'
  },
  {
    id: 5,
    icon: InstagramIcon,
    alt: 'Instagram icon'
  },
]
</script>
<template>
  <FooterLogo :src="logoAttrs.logo" :alt="logoAttrs.alt" />
  <FooterMedia v-for="socialMediaIcon in socialMediaIcons" :key="socialMediaIcon.id" :src="socialMediaIcon.icon" :alt="socialMediaIcon.alt"/>
</template>
<style scoped lang="scss"></style>
