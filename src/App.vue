<template>
  <div class="bp-page">
    <Nav />
    <Hero />
    <Setlist />
    <Gallery />
    <Videos />
    <Chapters />
    <Manifesto />
    <CTA />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Setlist from './components/Setlist.vue'
import Gallery from './components/Gallery.vue'
import Videos from './components/Videos.vue'
import Chapters from './components/Chapters.vue'
import Manifesto from './components/Manifesto.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import { initLenis } from './composables/lenis.js'

onMounted(() => {
  initLenis()
})
</script>
