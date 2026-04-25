<template>
  <section class="bp-manifesto" id="program">
    <Eyebrow v-reveal>program note</Eyebrow>
    <blockquote v-reveal="120" class="bp-manifesto__quote">
      <span class="bp-manifesto__open">&ldquo;</span>
      Levamos ao palco o show do BLACKPINK com a mesma energia, esforço e espírito do original — <em>para que cada performance tenha o sentimento de um show de verdade.</em>&rdquo;
    </blockquote>
    <div v-reveal="260" class="bp-manifesto__cite">Legacy Blackpink Cover · estreia · 2026</div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
</script>

<style src="../styles/components/manifesto.css"></style>
