<template>
  <section class="bp-hero" id="top">
    <div class="bp-hero__aura" />
    <img src="/assets/crown-gem.png" class="bp-hero__crown" alt="" />
    <Eyebrow class="bp-hero__eyebrow">— legacy blackpink cover —</Eyebrow>
    <h1 class="bp-hero__title">
      Vestido por quem escolhe ser <em>vista</em>.
    </h1>
    <p class="bp-hero__sub">
      Um cover oficial da BLACKPINK. Cinco anos de palco, uma coroa emprestada, nenhum pedido de licença.
    </p>
    <div class="bp-hero__actions">
      <Button variant="primary" @click="$emit('primary')">Reserve seu lugar →</Button>
      <Button variant="ghost" @click="scrollToSetlist">Ver repertório</Button>
    </div>
    <div class="bp-hero__meta">
      <span>◆ estreia · 18 de maio</span>
      <span>·</span>
      <span>são paulo · rio · brasília</span>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
import Button from './Button.vue'
import { scrollToAnchor } from '../composables/lenis.js'

defineEmits(['primary'])

const scrollToSetlist = () => scrollToAnchor('#setlist')
</script>
