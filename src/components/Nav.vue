<template>
  <nav class="bp-nav">
    <a class="bp-nav__brand" href="#top" @click.prevent="go('#top')">
      <img src="/assets/crown-flat.png" alt="" />
      <span class="bp-nav__lockup">
        <span class="bp-nav__eyebrow">— legacy —</span>
        <span class="bp-nav__wordmark">Blackpink</span>
      </span>
    </a>
    <div class="bp-nav__links">
      <a
        v-for="l in links"
        :key="l.href"
        class="bp-nav__link"
        :class="{ 'bp-nav__link--active': l.active }"
        :href="l.href"
        @click.prevent="go(l.href)"
      >{{ l.label }}</a>
    </div>
    <Button variant="primary" size="sm" @click="go('#contato')">Entre em contato</Button>
  </nav>
</template>

<script setup>
import Button from './Button.vue'
import { scrollToAnchor } from '../composables/lenis.js'

const links = [
  { href: '#setlist',  label: '— repertório', active: true },
  { href: '#gallery',  label: 'galeria' },
  { href: '#videos',   label: 'vídeos' },
  { href: '#chapters', label: 'capítulos' },
  { href: '#contato',  label: 'contato' }
]

function go(sel) {
  scrollToAnchor(sel)
  history.replaceState(null, '', sel)
}
</script>

<style src="../styles/components/nav.css"></style>
