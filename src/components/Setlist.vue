<template>
  <section class="bp-tour" id="setlist">
    <div class="bp-tour__head">
      <Eyebrow v-reveal>— the setlist —</Eyebrow>
      <h2 v-reveal="60" class="bp-tour__title">Repertório · 2026</h2>
    </div>
    <ol class="bp-tour__list">
      <li v-for="(t, i) in setlist" :key="i" v-reveal="i * 60" class="bp-tour__row">
        <span class="bp-tour__num">{{ (i + 1).toString().padStart(2, '0') }}</span>
        <span class="bp-tour__song">{{ t.song }}</span>
        <span class="bp-tour__album">{{ t.album }}</span>
        <Pill :variant="t.variant">{{ t.status }}</Pill>
        <Button variant="ghost" size="sm">Ouvir →</Button>
      </li>
    </ol>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
import Pill from './Pill.vue'
import Button from './Button.vue'

const setlist = [
  { song: 'Pink Venom',          album: 'Born Pink · 2022',   status: 'abertura',   variant: 'hot' },
  { song: 'Kill This Love',      album: 'Kill This Love · 2019', status: 'hino',    variant: 'pink' },
  { song: 'How You Like That',   album: 'The Album · 2020',   status: 'clássico',   variant: 'pink' },
  { song: 'DDU-DU DDU-DU',       album: 'Square Up · 2018',   status: 'essencial',  variant: 'ghost' },
  { song: 'Shut Down',           album: 'Born Pink · 2022',   status: 'novo',       variant: 'hot' },
  { song: 'Boombayah',           album: 'Square One · 2016',  status: 'origem',     variant: 'onyx' },
  { song: 'Whistle',             album: 'Square One · 2016',  status: 'acústico',   variant: 'ghost' },
  { song: 'Playing With Fire',   album: 'Square Two · 2016',  status: 'encore',     variant: 'pink' },
  { song: 'Lovesick Girls',      album: 'The Album · 2020',   status: 'favorita',   variant: 'onyx' },
  { song: 'As If It\'s Your Last', album: 'Single · 2017',    status: 'curtain call', variant: 'ghost' }
]
</script>

<style src="../styles/components/setlist.css"></style>
