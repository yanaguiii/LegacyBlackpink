<template>
  <section class="bp-gems" id="chapters">
    <div class="bp-gems__grid">
      <article v-reveal class="bp-gem">
        <Eyebrow>capítulo i</Eyebrow>
        <h3 class="bp-gem__t">A Abertura</h3>
        <p class="bp-gem__b">
          Um único refletor. Uma coroa que não é nossa, mas que carregamos com respeito. O palco está vazio — e esse é o ponto.
        </p>
        <Button variant="ghost" size="sm">Ler →</Button>
      </article>
      <article v-reveal="120" class="bp-gem bp-gem--featured">
        <img src="/assets/crown-flat.png" class="bp-gem__crown" alt="" />
        <Eyebrow>capítulo ii</Eyebrow>
        <h3 class="bp-gem__t">A Coroação</h3>
        <p class="bp-gem__b">
          Um cover não é cópia. É a forma de dizer: essa canção foi escrita para outra pessoa, e esta noite, ela é para você.
        </p>
        <Button variant="primary" size="sm" @click="scrollToContato">Fale com a banda →</Button>
      </article>
      <article v-reveal="240" class="bp-gem">
        <Eyebrow>capítulo iii</Eyebrow>
        <h3 class="bp-gem__t">O Encore</h3>
        <p class="bp-gem__b">
          Não vamos anunciá-lo. Você vai saber porque a cortina vai subir duas vezes.
        </p>
        <Button variant="ghost" size="sm">Ler →</Button>
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
