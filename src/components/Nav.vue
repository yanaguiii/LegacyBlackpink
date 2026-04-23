<template>
  <nav class="bp-nav">
    <a class="bp-nav__brand" href="#top">
      <img src="/assets/crown-flat.png" alt="" />
      <span class="bp-nav__lockup">
        <span class="bp-nav__eyebrow">— legacy —</span>
        <span class="bp-nav__wordmark">Blackpink</span>
      </span>
    </a>
    <div class="bp-nav__links">
      <a class="bp-nav__link bp-nav__link--active" href="#setlist">— repertório</a>
      <a class="bp-nav__link" href="#chapters">capítulos</a>
      <a class="bp-nav__link" href="#program">manifesto</a>
      <a class="bp-nav__link" href="#shop">contato</a>
    </div>
    <Button variant="primary" size="sm" @click="$emit('enter')">Entrar</Button>
  </nav>
</template>

<script setup>
import Button from './Button.vue'
defineEmits(['enter'])
</script>
