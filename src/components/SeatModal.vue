<template>
  <teleport to="body">
    <div v-if="open" class="bp-modal__scrim" @click="$emit('close')">
      <div class="bp-modal" @click.stop>
        <button class="bp-modal__close" @click="$emit('close')" aria-label="Fechar">×</button>
        <img src="/assets/crown-flat.png" class="bp-modal__crown" alt="" />
        <span class="bp-eyebrow bp-eyebrow--ruled">— reserve seu lugar —</span>
        <h2 class="bp-modal__t">Bem-vinda à primeira fila.</h2>
        <p class="bp-modal__b">Preencha seus dados. Em até uma hora você recebe o passe no email.</p>
        <form class="bp-modal__form" @submit.prevent="$emit('close')">
          <Field label="nome completo" placeholder="Jennie K." />
          <Field label="email" placeholder="voce@backstage.com" type="email" boxed />
          <Field label="código do passe" placeholder="TOUR-0001" boxed />
          <Button variant="primary" type="submit">Confirmar →</Button>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import Button from './Button.vue'
import Field from './Field.vue'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

function onKey(e) {
  if (e.key === 'Escape') emit('close')
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

watch(() => props.open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
})
</script>
