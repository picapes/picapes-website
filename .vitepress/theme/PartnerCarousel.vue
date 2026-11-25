<template>
  <section class="partners">
    <h2>Our Partners</h2>
    <br>

    <div
      class="partners-wrapper"
      @mouseenter="paused = true"
      @mouseleave="paused = false"
    >
      <div ref="track" class="partners-track">
        <a
          v-for="(partner, index) in duplicatedPartners"
          :key="`${partner.name}-${index}`"
          :href="partner.link"
          target="_blank"
          rel="noopener noreferrer"
          class="partner-card"
        >
          <img :src="partner.logo" :alt="partner.name">
          <h3>{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const partners = [
  {
    name: 'ItzSumedh Legacy',
    logo: '/assets/partners/itzsumedhlegacy.png',
    link: 'https://discord.gg/j2ZYaGzdkE',
    description: 'A home of well-known creators and designers.'
  },
  {
    name: 'SyanicXD',
    logo: '/assets/partners/syanicxd.png',
    link: 'https://youtube.com/@SyanicXD',
    description: 'Minecraft Content Creator & Backend Developer'
  },
  {
    name: 'GPLinks',
    logo: '/assets/partners/gplinks.png',
    link: 'https://gplinks.com/ref/101561592048621213726',
    description: 'Turn your traffic into profit easily with GPLinks.'
  },
  {
    name: 'Rumble Capes',
    logo: '/assets/partners/rumblecapes.png',
    link: 'https://github.com/Rumble-Capes',
    description: 'Legacy cape provider, now part of PiCapes.'
  }, 
  {
    name: 'Alpha White',
    logo: '/assets/partners/alphawhite.png',
    link: 'https://youtube.com/@AlphaWhite',
    description: 'Minecraft Creator that makes Quality videos.'
  }
]

const track = ref(null)
const paused = ref(false)
const offset = ref(0)

const speed = 35

let rafId = null
let lastTimestamp = 0

const duplicatedPartners = computed(() => [
  ...partners,
  ...partners
])

function animate(timestamp) {
  if (!track.value) {
    rafId = requestAnimationFrame(animate)
    return
  }

  if (!lastTimestamp) {
    lastTimestamp = timestamp
  }

  const delta = timestamp - lastTimestamp
  lastTimestamp = timestamp

  if (!paused.value) {
    const resetAt = Math.floor(track.value.scrollWidth / 2)

    offset.value += (speed * delta) / 1000

    if (resetAt > 0 && offset.value >= resetAt) {
      offset.value -= resetAt
    }

    track.value.style.transform = `translate3d(-${offset.value}px,0,0)`
  }

  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  offset.value = 0
  lastTimestamp = 0
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.partners { padding: 4rem 0 2rem; text-align: center; }
.partners h2 { margin: 0; font-size: 2rem; font-weight: 700; border: none; border-bottom: none !important; }
.partners-subtitle { max-width: 700px; margin: 0.75rem auto 2.5rem; color: var(--vp-c-text-2); line-height: 1.7; font-size: 1rem; }
.partners-wrapper { position: relative; overflow: hidden; padding: 0 1rem 1rem; mask-image: linear-gradient(to right, transparent 0%, white 12%, white 88%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent 0%, white 12%, white 88%, transparent 100%); }
.partners-track { display: flex; gap: 1.25rem; width: max-content; will-change: transform; }
.partner-card { flex-shrink: 0; width: 240px; min-height: 250px; box-sizing: border-box; background: var(--vp-c-bg-soft); /*border: 1px solid var(--vp-c-divider);*/ border-radius: 16px; padding: 1.4rem; display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit !important; transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease; }
/*.partner-card:hover { border-color: var(--vp-c-brand-1); }*/
.partner-card img { width: 64px; height: 64px; border-radius: 50%; object-fit: contain; margin-bottom: 1rem; }
.partner-card h3 { margin: 0 0 .5rem; font-size: 1rem; font-weight: 600; color: inherit !important; }
.partner-card p { margin: 0; font-size: .92rem; line-height: 1.6; color: var(--vp-c-text-2); }

@media (max-width: 768px) {
  .partners { padding: 3rem 0 1.5rem; }
  .partners-subtitle { margin-bottom: 2rem; padding: 0 1rem; }
  .partner-card { width: 210px; min-height: 230px; padding: 1.1rem; }
  .partner-card img { width: 56px; height: 56px; }
}
</style>