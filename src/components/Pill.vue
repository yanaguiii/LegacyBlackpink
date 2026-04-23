<template>
  <span :class="['bp-pill', `bp-pill--${variant}`]"><slot /></span>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'pink' }
})
</script>
