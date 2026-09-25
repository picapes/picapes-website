// Icons in Home
<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { frontmatter } = useData()
const route = useRoute()

function syncHeroActionIcons() {
  const actions = frontmatter.value?.hero?.actions ?? []
  const buttons = document.querySelectorAll('.VPHomeHero .actions .action .VPButton')

  buttons.forEach((button, index) => {
    button.querySelector('.hero-action-icon')?.remove()

    const icon = actions[index]?.icon
    if (!icon) return

    const iconTemplate = document.createElement('template')
    iconTemplate.innerHTML = icon.trim()

    const iconElement = iconTemplate.content.firstElementChild
    if (!iconElement) return

    iconElement.classList.add('hero-action-icon')
    iconElement.setAttribute('aria-hidden', 'true')
    button.prepend(iconElement)
  })
}

function queueSync() {
  nextTick(syncHeroActionIcons)
}

onMounted(queueSync)
watch(() => route.path, queueSync)
watch(frontmatter, queueSync)
</script>

<template></template>
