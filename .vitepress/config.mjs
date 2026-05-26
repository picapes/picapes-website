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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/picapes' },
      { icon: 'discord', link: 'https://dsc.gg/picapes' }
    ]
  }
})
