<template>
  <section class="bp-gallery" id="gallery">
    <div class="bp-gallery__head">
      <Eyebrow v-reveal>— bastidores —</Eyebrow>
      <h2 v-reveal="60" class="bp-gallery__title">Galeria</h2>
      <p v-reveal="120" class="bp-gallery__sub">Ensaios, palco e tudo que fica entre uma música e a próxima.</p>
    </div>

    <div class="bp-gallery__grid">
      <figure
        v-for="(item, i) in items"
        :key="i"
        v-reveal="i * 90"
        :class="['bp-tile', `bp-tile--${item.layout || 'square'}`, item.src ? '' : 'bp-tile--empty']"
      >
        <template v-if="item.src && item.type === 'image'">
          <img :src="item.src" :alt="item.alt || ''" loading="lazy" />
        </template>
        <template v-else-if="item.src && (item.type === 'video' || item.type === 'gif')">
          <video :src="item.src" autoplay muted loop playsinline preload="metadata" />
        </template>
        <template v-else>
          <div class="bp-tile__placeholder">
            <img src="/assets/crown-flat.png" alt="" class="bp-tile__mark" />
            <span class="bp-tile__slot">— slot {{ String(i + 1).padStart(2, '0') }} —</span>
          </div>
        </template>
        <figcaption v-if="item.caption" class="bp-tile__caption">{{ item.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'

// Edite aqui para preencher a galeria.
// type: 'image' | 'video' | 'gif'   |   layout: 'square' | 'tall' | 'wide'
// Deixe `src: ''` para manter o placeholder on-brand.
const items = [
  { type: 'image', src: '', alt: 'Abertura do show', layout: 'tall',   caption: 'abertura · são paulo' },
  { type: 'image', src: '', alt: 'Backstage',        layout: 'square' },
  { type: 'video', src: '', alt: 'Coreografia',      layout: 'square', caption: 'how you like that · ensaio' },
  { type: 'image', src: '', alt: 'Encore',           layout: 'wide',   caption: 'encore · rio de janeiro' },
  { type: 'image', src: '', alt: 'Detalhe',          layout: 'square' },
  { type: 'gif',   src: '', alt: 'Coreografia gif',  layout: 'square' }
]
</script>
