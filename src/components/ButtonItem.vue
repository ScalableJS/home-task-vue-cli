<template>
  <button :class="classes" @click="onClick">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
  },
});

const emit = defineEmits(['change']);

const onClick = emit('change');

const classes = computed(() => ({
  'net-button': true,
  'net-button--primary': props.primary,
  'net-button--secondary': !props.primary,
  [`net-button--${props.size || 'medium'}`]: true,
}));
</script>

<style lang="scss" scoped>
@import '../assets/_variables.scss';

.net-button {
  border: 0;
  border-radius: 5px;
  padding: 0 1em;

  &--primary {
    background: $bg-color-primary;
    color: #fff;
  }
  &--secondary {
    background: $bg-color-secondary;
    color: #fff;
  }
  &--large {
    font-size: 1rem;
    min-height: 40px;
  }
  &--medium {
    font-size: 1rem;
    min-height: 30px;
  }
  &--small {
    font-size: 1rem;
    min-height: 20px;
  }
}
</style>
