<template>
  <teleport to="body">
    <div v-if="open" class="bp-modal__scrim" @click="close">
      <div class="bp-modal" @click.stop>
        <button class="bp-modal__close" @click="close" aria-label="Fechar">×</button>
        <img src="/assets/crown-flat.png" class="bp-modal__crown" alt="" />

        <template v-if="!submitted">
          <span class="bp-eyebrow bp-eyebrow--ruled">— get in touch —</span>
          <h2 class="bp-modal__t">Entre em contato.</h2>
          <p class="bp-modal__b">Shows, parcerias, covers por encomenda. Respondemos em até 24h.</p>
          <form class="bp-modal__form" @submit.prevent="onSubmit" novalidate>
            <Field v-model="fullName" label="nome" placeholder="Jennie K." />
            <Field v-model="email" label="email" placeholder="voce@backstage.com" type="email" boxed />
            <label class="bp-field">
              <span class="bp-field__label">— mensagem</span>
              <textarea
                v-model="message"
                class="bp-field__inp bp-field__inp--boxed bp-field__inp--area"
                rows="4"
                placeholder="Conte o que você precisa."
              />
            </label>
            <Button variant="primary" type="submit">Enviar →</Button>
          </form>
        </template>

        <template v-else>
          <span class="bp-eyebrow bp-eyebrow--ruled">— mensagem enviada —</span>
          <h2 class="bp-modal__t">Recebemos sua mensagem.</h2>
          <p class="bp-modal__b">Resposta em <strong>{{ email }}</strong> em até 24h. Esse modal fecha em {{ countdown }}s.</p>
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
const message = ref('')
const submitted = ref(false)
const countdown = ref(5)
let timer = null

function onSubmit() {
  if (!fullName.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value) || !message.value.trim()) return
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
  message.value = ''
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
