<script setup>
import { onMounted, ref } from 'vue'

const showPrompt = ref(false)

onMounted(() => {
  showPrompt.value = new URLSearchParams(window.location.search).has('registerPrompt')
})
</script>

<template>
  <div v-if="showPrompt" class="custom-block warning">
    <p class="custom-block-title">⚠ Seems like you're not registered in PiCapes</p>
    <p>Follow these steps to register first in order to use PiCapes.</p>
  </div>
</template>