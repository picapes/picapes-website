<script setup>
import { withBase } from 'vitepress'

const links = [
  {
    text: 'YouTube',
    href: 'https://www.youtube.com/@syanicxd',
    icon: 'fa-brands fa-youtube'
  },
  {
    text: 'Discord Server',
    href: 'https://dsc.gg/picapes',
    icon: 'fa-brands fa-discord'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/picapes',
    icon: 'fa-brands fa-github'
  },
  {
    text: 'Terms of Service',
    href: '/legal/terms-of-service'
  },
  {
    text: 'Privacy Policy',
    href: '/legal/privacy-policy'
  }
]
</script>

<template>
  <footer class="SiteFooter">
    <nav class="SiteFooterLinks" aria-label="Footer navigation">
      <a
        v-for="link in links"
        :key="link.text"
        class="SiteFooterLink"
        :href="link.href.startsWith('http') ? link.href : withBase(link.href)"
        :target="link.href.startsWith('http') ? '_blank' : undefined"
        :rel="link.href.startsWith('http') ? 'noreferrer' : undefined"
      >
        <i v-if="link.icon" :class="link.icon" aria-hidden="true"></i>
        <span>{{ link.text }}</span>
      </a>
    </nav>
    <p class="SiteFooterCopyright">
      &copy; PiCapes 2025. All Rights Reserved - Not affiliated with Mojang Studios
    </p>
  </footer>
</template>
