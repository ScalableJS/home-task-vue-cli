<template>
  <form :class="classes" action="" @submit.prevent="onSubmit">
    <Input :size="size" type="search" v-focus v-model="data.searchValue" />
    <Button :size="size" :label="label" :primary="primary" />
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, reactive } from 'vue';
import Input from './InputItem.vue';
import Button from './ButtonItem.vue';

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
    required: true,
  },
  size: {
    type: String,
    validator: function (value: string) {
      return ['small', 'medium', 'large'].indexOf(value) !== -1;
    },
    required: true,
  },
});

const data = reactive({
  searchValue: props.searchValue,
});

const emit = defineEmits<{
  (e: 'submit', value: string): void;
}>();

const onSubmit = () => {
  emit('submit', data.searchValue);
};

const classes = computed(() => ({
  'net-search-item': true,
  'net-search-item--primary': props.primary,
  'net-search-item--secondary': !props.primary,
  [`net-search-item--${props.size || 'medium'}`]: true,
}));
</script>
<style lang="scss" scoped>
@import '../assets/_variables.scss';

.net-search-item {
  display: flex;

  input {
    width: 80%;
    margin-right: 20px;
  }

  button {
    width: 20%;
  }
}
</style>
