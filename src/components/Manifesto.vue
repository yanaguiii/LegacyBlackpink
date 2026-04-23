<template>
  <section class="bp-manifesto" id="program">
    <Eyebrow v-reveal>— program note —</Eyebrow>
    <blockquote v-reveal="120" class="bp-manifesto__quote">
      <span class="bp-manifesto__open">&ldquo;</span>
      Um cover não é cópia. É o ato de dizer <em>— esta canção foi escrita para outra pessoa, e esta noite, ela é para você.</em>
    </blockquote>
    <div v-reveal="260" class="bp-manifesto__cite">Legacy Blackpink Cover · estreia · 2026</div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
</script>
