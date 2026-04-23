<template>
  <section class="bp-videos" id="videos">
    <div class="bp-videos__head">
      <Eyebrow v-reveal>— performances —</Eyebrow>
      <h2 v-reveal="60" class="bp-videos__title">Vídeos</h2>
      <p v-reveal="120" class="bp-videos__sub">Covers no palco e em estúdio. Volume no talo.</p>
    </div>

    <div class="bp-videos__grid">
      <figure v-for="(v, i) in videos" :key="i" v-reveal="i * 140" class="bp-video">
        <div class="bp-video__frame">
          <iframe
            v-if="v.youtubeId"
            :src="`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0`"
            :title="v.title"
            loading="lazy"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          />
          <video
            v-else-if="v.src"
            :src="v.src"
            controls
            preload="metadata"
          />
          <div v-else class="bp-video__placeholder">
            <img src="/assets/crown-flat.png" alt="" class="bp-video__mark" />
            <span class="bp-video__slot">— slot {{ String(i + 1).padStart(2, '0') }} —</span>
          </div>
        </div>
        <figcaption class="bp-video__meta">
          <span class="bp-video__title">{{ v.title }}</span>
          <span v-if="v.song" class="bp-video__song">{{ v.song }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'

// Preencha com youtubeId (preferível) ou src local.
// Ex: { youtubeId: 'dQw4w9WgXcQ', title: 'Pink Venom · ao vivo', song: 'Pink Venom' }
const videos = [
  { youtubeId: '', title: 'Pink Venom',      song: 'abertura do show' },
  { youtubeId: '', title: 'Kill This Love',  song: 'ensaio em estúdio' },
  { youtubeId: '', title: 'How You Like That', song: 'ao vivo · são paulo' }
]
</script>
