<template>
  <section class="bp-tour" id="setlist">
    <div class="bp-tour__head">
      <Eyebrow v-reveal>the setlist</Eyebrow>
      <h2 v-reveal="60" class="bp-tour__title">Repertório · 2026</h2>
    </div>
    <ol class="bp-tour__list">
      <li v-for="(t, i) in setlist" :key="i" v-reveal="i * 60" class="bp-tour__row">
        <span class="bp-tour__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
        <span class="bp-tour__song">{{ t.song }}</span>
        <span class="bp-tour__album">{{ t.album }}</span>
        <a
          :href="t.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bp-btn bp-btn--ghost bp-btn--sm"
        >Ouvir →</a>
      </li>
    </ol>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
import Pill from './Pill.vue'

const setlist = [
  { song: 'Kill This Love',    album: 'Kill This Love · 2019', variant: 'pink',  url: 'https://open.spotify.com/intl-pt/track/6hvczQ05jc1yGlp9zhb95V?si=0fa7649c4e204268' },
  { song: 'How You Like That', album: 'The Album · 2020',      variant: 'pink',  url: 'https://open.spotify.com/intl-pt/track/4SFknyjLcyTLJFPKD2m96o?si=c7d98ad4e7624f06' },
  { song: 'Typa Girl',         album: 'Born Pink · 2022',      variant: 'ghost', url: 'https://open.spotify.com/intl-pt/track/0L8LOav65XwLjCLS11gNPD?si=6d3ca89a508c4a22' },
  { song: 'Lovesick Girls',    album: 'The Album · 2020',      variant: 'onyx',  url: 'https://open.spotify.com/intl-pt/track/4Ws314Ylb27BVsvlZOy30C?si=daeb83c9f699415e' },
  { song: 'Forever Young',     album: 'Square Up · 2018',      variant: 'ghost', url: 'https://open.spotify.com/intl-pt/track/6veFyjNycn6EaNCKhkPXUY?si=8925b37fffdb410d' },
  { song: 'GO',                album: 'DEADLINE · 2026',       variant: 'pink',  url: 'https://open.spotify.com/intl-pt/track/3FZPp9lBUvhsxFxKJi3VkB?si=4819346fb30f4a0c' },
  { song: 'BOOMBAYAH',         album: 'Square One · 2016',     variant: 'onyx',  url: 'https://open.spotify.com/intl-pt/track/13MF2TYuyfITClL1R2ei6e?si=a833d3e0f3a04aa1' },
  { song: 'Jump',              album: 'DEADLINE · 2026',       variant: 'hot',   url: 'https://open.spotify.com/intl-pt/track/5H1sKFMzDeMtXwND3V6hRY?si=413104e66b0d400f' },
  { song: 'Shut Down',         album: 'Born Pink · 2022',      variant: 'hot',   url: 'https://open.spotify.com/intl-pt/track/7gRFDGEzF9UkBV233yv2dc?si=2844e1242192487e' },
  { song: 'Pink Venom',        album: 'Born Pink · 2022',      variant: 'hot',   url: 'https://open.spotify.com/intl-pt/track/5zwwW9Oq7ubSxoCGyW1nbY?si=7ff56fae075b4ef1' }
]
</script>

<style src="../styles/components/setlist.css"></style>
