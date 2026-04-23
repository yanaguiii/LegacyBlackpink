<template>
  <button
    :class="['bp-btn', `bp-btn--${variant}`, `bp-btn--${size}`]"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  type: { type: String, default: 'button' }
})
defineEmits(['click'])
</script>
