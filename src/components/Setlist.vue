<template>
  <section class="bp-tour" id="setlist">
    <div class="bp-tour__head">
      <Eyebrow v-reveal>the setlist</Eyebrow>
      <h2 v-reveal="60" class="bp-tour__title">Repertório · 2026</h2>
    </div>

    <ol class="bp-tour__list">
      <li v-for="(t, i) in setlist.slice(0, VISIBLE_COUNT)" :key="t.song" v-reveal="i * 60" class="bp-tour__row">
        <span class="bp-tour__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
        <span class="bp-tour__song">{{ t.song }}</span>
        <span class="bp-tour__album">{{ t.album }}</span>
        <a :href="t.url" target="_blank" rel="noopener noreferrer" class="bp-btn bp-btn--ghost bp-btn--sm">Ouvir →</a>
      </li>
    </ol>

    <div class="bp-tour__extra" :class="{ 'bp-tour__extra--open': expanded }">
      <div class="bp-tour__extra-inner">
        <ol class="bp-tour__list bp-tour__list--tail">
          <li v-for="(t, i) in setlist.slice(VISIBLE_COUNT)" :key="t.song" class="bp-tour__row">
            <span class="bp-tour__num">{{ (VISIBLE_COUNT + i + 1).toString().padStart(2, '0') }}</span>
            <span class="bp-tour__song">{{ t.song }}</span>
            <span class="bp-tour__album">{{ t.album }}</span>
            <a :href="t.url" target="_blank" rel="noopener noreferrer" class="bp-btn bp-btn--ghost bp-btn--sm">Ouvir →</a>
          </li>
        </ol>
      </div>
    </div>

    <button class="bp-tour__toggle" @click="expanded = !expanded">
      {{ expanded ? 'Ver menos' : 'Ver mais' }}
      <span class="bp-tour__arrow" :class="{ 'bp-tour__arrow--up': expanded }">↓</span>
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Eyebrow from './Eyebrow.vue'

const VISIBLE_COUNT = 6
const expanded = ref(false)

const setlist = [
  { song: 'Kill This Love',    album: 'KILL THIS LOVE · 2019', url: 'https://open.spotify.com/intl-pt/track/6hvczQ05jc1yGlp9zhb95V?si=0fa7649c4e204268' },
  { song: 'How You Like That', album: 'THE ALBUM · 2020',      url: 'https://open.spotify.com/intl-pt/track/3p9HltmtqXCvCSKKOKMZ29?si=a826850c0c3246da' },
  { song: 'Pink Venom',        album: 'BORN PINK · 2022',      url: 'https://open.spotify.com/intl-pt/track/0skYUMpS0AcbpjcGsAbRGj?si=f613cd359e514884' },
  { song: 'Lovesick Girls',    album: 'THE ALBUM · 2020',      url: 'https://open.spotify.com/intl-pt/track/4Ws314Ylb27BVsvlZOy30C?si=daeb83c9f699415e' },
  { song: 'Forever Young',     album: 'SQUARE UP · 2018',      url: 'https://open.spotify.com/intl-pt/track/6veFyjNycn6EaNCKhkPXUY?si=8925b37fffdb410d' },
  { song: 'GO',                album: 'DEADLINE · 2026',       url: 'https://open.spotify.com/intl-pt/track/3FZPp9lBUvhsxFxKJi3VkB?si=4819346fb30f4a0c' },
  { song: 'BOOMBAYAH',         album: 'SQUARE ONE · 2016',     url: 'https://open.spotify.com/intl-pt/track/13MF2TYuyfITClL1R2ei6e?si=a833d3e0f3a04aa1' },
  { song: 'Jump',              album: 'DEADLINE · 2026',       url: 'https://open.spotify.com/intl-pt/track/5H1sKFMzDeMtXwND3V6hRY?si=413104e66b0d400f' },
  { song: 'Shut Down',         album: 'BORN PINK · 2022',      url: 'https://open.spotify.com/intl-pt/track/7gRFDGEzF9UkBV233yv2dc?si=2844e1242192487e' },
  { song: 'Pretty Savage',     album: 'THE ALBUM · 2020',      url: 'https://open.spotify.com/intl-pt/track/1XnpzbOGptRwfJhZgLbmSr?si=de60af2444914fac' }
]
</script>

<style src="../styles/components/setlist.css"></style>
