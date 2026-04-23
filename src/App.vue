<template>
  <div class="bp-page">
    <Nav @enter="openModal" />
    <Hero @primary="openModal" />
    <Setlist />
    <Chapters />
    <Manifesto />
    <CTA />
    <Footer />
    <SeatModal :open="modalOpen" @close="modalOpen = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Setlist from './components/Setlist.vue'
import Chapters from './components/Chapters.vue'
import Manifesto from './components/Manifesto.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
import SeatModal from './components/SeatModal.vue'

const modalOpen = ref(false)
const openModal = () => { modalOpen.value = true }
</script>
