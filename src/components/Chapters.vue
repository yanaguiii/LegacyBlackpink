<template>
  <section class="bp-gems" id="chapters">
    <div class="bp-gems__grid">
      <article v-reveal class="bp-gem">
        <Eyebrow>capítulo i</Eyebrow>
        <h3 class="bp-gem__t">Produção</h3>
        <p class="bp-gem__b">
          Estrutura de palco completa: som, luz, figurino e coreografia alinhados ao show original — adaptáveis a eventos, casas de show e festivais.
        </p>
      </article>
      <article v-reveal="120" class="bp-gem bp-gem--featured">
        <img src="/assets/crown-flat.png" class="bp-gem__crown" alt="" />
        <Eyebrow>capítulo ii</Eyebrow>
        <h3 class="bp-gem__t">Repertório</h3>
        <p class="bp-gem__b">
          Os maiores hits da BLACKPINK entregues com a mesma energia e presença do show original. Setlists adaptáveis ao tempo e ao formato do evento.
        </p>
        <Button variant="primary" size="sm" @click="scrollToContato">Fale com a banda →</Button>
      </article>
      <article v-reveal="240" class="bp-gem">
        <Eyebrow>capítulo iii</Eyebrow>
        <h3 class="bp-gem__t">Estrada</h3>
        <p class="bp-gem__b">
          Cinco anos de palco e um repertório que se adapta à sua vontade — do clube ao festival, com entrega consistente a cada apresentação.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import Eyebrow from './Eyebrow.vue'
import Button from './Button.vue'
import { scrollToAnchor } from '../composables/lenis.js'

const scrollToContato = () => scrollToAnchor('#contato')
</script>
