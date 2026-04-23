<template>
  <section class="bp-cta" id="shop">
    <Eyebrow>— lista de espera —</Eyebrow>
    <h2 class="bp-cta__t">A primeira fila é por convite.</h2>
    <p class="bp-cta__b">Deixe seu nome. Quando um lugar abrir, você será a primeira a saber.</p>

    <form v-if="!submitted" class="bp-cta__form" @submit.prevent="onSubmit" novalidate>
      <Field v-model="name" label="seu nome" placeholder="Jennie K." />
      <Field v-model="email" label="email" placeholder="voce@backstage.com" type="email" />
      <Button variant="primary" type="submit">Entrar na lista →</Button>
    </form>

    <div v-else class="bp-cta__ack" role="status" aria-live="polite">
      <span class="bp-cta__ack-mark">◆</span>
      <p class="bp-cta__ack-t">Seu nome está na lista.</p>
      <p class="bp-cta__ack-b">Se um lugar abrir, você será a primeira a saber.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Eyebrow from './Eyebrow.vue'
import Button from './Button.vue'
import Field from './Field.vue'

const name = ref('')
const email = ref('')
const submitted = ref(false)

function onSubmit() {
  if (!name.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) return
  submitted.value = true
}
</script>

<style scoped>
.bp-cta__ack {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 24px;
  padding: 32px 24px;
  box-shadow: inset 0 0 0 1px rgba(244, 166, 189, 0.3);
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
}
.bp-cta__ack-mark {
  color: var(--legacy-pink);
  font-size: 22px;
  line-height: 1;
}
.bp-cta__ack-t {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 22px;
  color: var(--legacy-pearl);
  margin: 0;
  letter-spacing: -0.01em;
}
.bp-cta__ack-b {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 15px;
  color: var(--fg2);
  margin: 0;
}
</style>
