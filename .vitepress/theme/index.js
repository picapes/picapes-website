// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HomeActionIcons from './HomeActionIcons.vue'
import SiteFooter from './SiteFooter.vue'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-actions-after': () => h(HomeActionIcons),
      'layout-bottom': () => h(SiteFooter)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
