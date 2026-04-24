<template>
  <section class="bp-hero" id="top">
    <div class="bp-hero__aura" />
    <img src="/assets/crown-gem.png" class="bp-hero__crown" alt="" />
    <Eyebrow class="bp-hero__eyebrow">— legacy blackpink cover —</Eyebrow>
    <h1 class="bp-hero__title">
      O show do BLACKPINK <em>ao vivo</em>, no Brasil.
    </h1>
    <p class="bp-hero__sub">
      Grupo cover oficial. Cinco anos de estrada para shows, eventos e festivais.
    </p>
    <div class="bp-hero__actions">
      <Button variant="primary" @click="scrollToContato">Entre em contato →</Button>
      <Button variant="ghost" @click="scrollToSetlist">Ver repertório</Button>
    </div>
    <div class="bp-hero__meta">
      <span>são paulo · rio · belo horizonte</span>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
import Button from './Button.vue'
import { scrollToAnchor } from '../composables/lenis.js'

const scrollToSetlist = () => scrollToAnchor('#setlist')
const scrollToContato = () => scrollToAnchor('#contato')
</script>

<style src="../styles/components/hero.css"></style>
