<template>
  <div class="bp-page">
    <Nav @enter="openModal" />
    <Hero @primary="openModal" />
    <Setlist />
    <Gallery />
    <Videos />
    <Chapters />
    <Manifesto />
    <CTA />
    <Footer />
    <SeatModal :open="modalOpen" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Setlist from './components/Setlist.vue'
import Gallery from './components/Gallery.vue'
import Videos from './components/Videos.vue'
import Chapters from './components/Chapters.vue'
import Manifesto from './components/Manifesto.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import SeatModal from './components/SeatModal.vue'
import { initLenis, getLenis } from './composables/lenis.js'

const modalOpen = ref(false)
const openModal = () => { modalOpen.value = true }

onMounted(() => {
  initLenis()
})

watch(modalOpen, (v) => {
  const lenis = getLenis()
  if (!lenis) return
  v ? lenis.stop() : lenis.start()
})
</script>
