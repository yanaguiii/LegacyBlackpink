<template>
  <label class="bp-field">
    <span class="bp-field__label">— {{ label }}</span>
    <input
      :class="['bp-field__inp', boxed ? 'bp-field__inp--boxed' : '']"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  boxed: { type: Boolean, default: false },
  modelValue: { type: String, default: '' }
})
defineEmits(['update:modelValue'])
</script>
