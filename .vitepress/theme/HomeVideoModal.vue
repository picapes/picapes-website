<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

const props = defineProps({
  videoId: {
    type: String,
    default: ''
  }
})

const { theme } = useData()
const isOpen = ref(false)
const effectiveVideoId = computed(() => props.videoId || theme.value.tutorialVideoId)
const videoSrc = computed(() => `https://www.youtube.com/embed/${effectiveVideoId.value}`)

function openVideo(event) {
  const trigger = event.target?.closest?.('a[href="#watch-video"]')
  if (!trigger) return

  event.preventDefault()
  isOpen.value = true
}

function closeVideo() {
  isOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') closeVideo()
}

onMounted(() => {
  document.addEventListener('click', openVideo)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', openVideo)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="video-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="watch-video-title"
      @click.self="closeVideo"
    >
      <button class="video-modal-close" type="button" aria-label="Close video" @click="closeVideo">
        <i class="fas fa-xmark" aria-hidden="true"></i>
      </button>
      <div class="video-modal-panel">
        <div class="video-frame">
          <iframe
            :src="videoSrc"
            title="PiCapes video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.72);
}

.video-modal-panel {
  width: min(960px, 100%);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}

.video-modal-close {
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 1001;
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.62);
  color: #fff;
  cursor: pointer;
}

.video-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--vp-c-bg-alt);
}

.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
