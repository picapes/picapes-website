import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PiCapes",
  description: "PiCapes is a free way to customize your Minecraft character with Capes!",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
  ],
  vite: {
    plugins: [
      {
        name: 'picapes-assets',
        generateBundle() {
          const assets = ['picapes-logo.png', 'player1.webp']

          for (const asset of assets) {
            const assetPath = fileURLToPath(new URL(`../assets/${asset}`, import.meta.url))

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

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Information',
        items: [
          { text: 'Getting Started', link: '/getting-started' }
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
      copyright: '© PiCapes 2025. All Rights Reserved - Not affiliated with Mojang Studios'
    }
  }
})
