<template>
  <section class="bp-cta" id="shop">
    <Eyebrow>— lista de espera —</Eyebrow>
    <h2 class="bp-cta__t">A primeira fila é por convite.</h2>
    <p class="bp-cta__b">Deixe seu nome. Quando um lugar abrir, você será a primeira a saber.</p>
    <form class="bp-cta__form" @submit.prevent="onSubmit">
      <Field v-model="name" label="seu nome" placeholder="Jennie K." />
      <Field v-model="email" label="email" placeholder="voce@backstage.com" type="email" />
      <Button variant="primary" type="submit">Entrar na lista →</Button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Eyebrow from './Eyebrow.vue'
import Button from './Button.vue'
import Field from './Field.vue'

const emit = defineEmits(['submit'])
const name = ref('')
const email = ref('')

function onSubmit() {
  emit('submit', { name: name.value, email: email.value })
}
</script>
