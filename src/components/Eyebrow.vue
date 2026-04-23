<template>
  <span :class="['bp-eyebrow', ruled ? 'bp-eyebrow--ruled' : '']">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  ruled: { type: Boolean, default: true }
})
</script>
