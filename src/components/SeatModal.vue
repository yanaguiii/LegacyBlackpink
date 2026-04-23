<template>
  <teleport to="body">
    <div v-if="open" class="bp-modal__scrim" @click="close">
      <div class="bp-modal" @click.stop>
        <button class="bp-modal__close" @click="close" aria-label="Fechar">×</button>
        <img src="/assets/crown-flat.png" class="bp-modal__crown" alt="" />

        <template v-if="!submitted">
          <span class="bp-eyebrow bp-eyebrow--ruled">— reserve seu lugar —</span>
          <h2 class="bp-modal__t">Bem-vinda à primeira fila.</h2>
          <p class="bp-modal__b">Preencha seus dados. Em até uma hora você recebe o passe no email.</p>
          <form class="bp-modal__form" @submit.prevent="onSubmit" novalidate>
            <Field v-model="fullName" label="nome completo" placeholder="Jennie K." />
            <Field v-model="email" label="email" placeholder="voce@backstage.com" type="email" boxed />
            <Field v-model="code" label="código do passe" placeholder="TOUR-0001" boxed />
            <Button variant="primary" type="submit">Confirmar →</Button>
          </form>
        </template>

        <template v-else>
          <span class="bp-eyebrow bp-eyebrow--ruled">— seu passe está a caminho —</span>
          <h2 class="bp-modal__t">Até logo, backstage.</h2>
          <p class="bp-modal__b">Confirmação em <strong>{{ email }}</strong> dentro de uma hora. Esse modal fecha em {{ countdown }}s.</p>
        </template>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import Button from './Button.vue'
import Field from './Field.vue'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['close'])

const fullName = ref('')
const email = ref('')
const code = ref('')
const submitted = ref(false)
const countdown = ref(5)
let timer = null

function onSubmit() {
  if (!fullName.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) return
  submitted.value = true
  countdown.value = 5
  timer = setInterval(() => {
    countdown.value -= 1
    if (countdown.value <= 0) close()
  }, 1000)
}

function close() {
  emit('close')
}

function resetState() {
  submitted.value = false
  fullName.value = ''
  email.value = ''
  code.value = ''
  if (timer) { clearInterval(timer); timer = null }
}

function onKey(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  if (timer) clearInterval(timer)
})

watch(() => props.open, (v) => {
  document.body.style.overflow = v ? 'hidden' : ''
  if (!v) resetState()
})
</script>
