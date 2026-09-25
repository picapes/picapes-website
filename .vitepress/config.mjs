import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PiCapes",
  titleTemplate: ':title | PiCapes',
  description: "PiCapes is a free way to customize your Minecraft character with Capes!",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/favicons/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/favicons/favicon.svg' }],
    ['link', { rel: 'shortcut icon', href: '/assets/favicons/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicons/apple-touch-icon.png' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'PiCapes' }],
    ['link', { rel: 'manifest', href: '/assets/favicons/site.webmanifest' }]
  ],
  vite: {
    plugins: [
      {
        name: 'picapes-assets',
        generateBundle() {
          const assetsDir = fileURLToPath(new URL('../assets', import.meta.url))
          const assets = []

          const walk = (dir, prefix = '') => {
            for (const name of readdirSync(dir)) {
              const fullPath = resolve(dir, name)
              const relPath = prefix ? `${prefix}/${name}` : name

              if (statSync(fullPath).isDirectory()) {
                walk(fullPath, relPath)
              } else {
                assets.push(relPath)
              }
            }
          }

          walk(assetsDir)

          for (const asset of assets) {
            const assetPath = resolve(assetsDir, asset)

            this.emitFile({
              type: 'asset',
              fileName: `assets/${asset}`,
              source: readFileSync(assetPath)
            })
          }
        }
      }
    ]
  },
  themeConfig: {
    logo: '/assets/picapes-logo.png',
    tutorialVideoId: '_d0Ekxj8KKo', // YouTube Tutorial video ID

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/introduction/what-is-picapes' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is PiCapes?', link: '/introduction/what-is-picapes' },
          { text: 'Frequently Asked Questions', link: '/introduction/faq' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installing the Mod', link: '/getting-started/installation'},
          { text: 'Registering your Account', link: '/getting-started/registering-your-account' },
          { text: 'Using the Dashboard', link: '/getting-started/using-the-dashboard' }
        ]
      },
      {
        text: 'Other Guides',
        items: [
          { text: 'ArcPi Proxy Setup', link: '/other-guides/arcpi-proxy' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Terms of Service', link: '/legal/terms-of-service' },
          { text: 'Privacy Policy', link: '/legal/privacy-policy' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/picapes' },
      { icon: 'discord', link: 'https://dsc.gg/picapes' }
    ],

    footer: {
      message: '<a href="https://www.youtube.com/@syanicxd" target="_blank"><i class="fa-brands fa-youtube"></i> YouTube</a> ・ <a href="https://dsc.gg/picapes" target="_blank"><i class="fa-brands fa-discord"></i> Discord</a> ・ <a href="https://github.com/picapes" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a> ・ <a href="/legal/terms-of-service">Terms of Service</a> ・ <a href="/legal/privacy-policy">Privacy Policy</a>',
      copyright: `© PiCapes ${new Date().getFullYear()}. All Rights Reserved - Not affiliated with Mojang Studios`
    }
  }
})
