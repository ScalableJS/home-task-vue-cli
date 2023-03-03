<template>
  <section class="net-find-your-movie">
    <h2>FIND YOUR MOVIE</h2>
    <SearchItem
      primary="true"
      label="SEARCH"
      size="large"
      @submit="handlerSearchSubmit"
    />
    <br />
    <ToggleSwitch
      primary="true"
      label="SEARCH BY"
      labelA="TITLE"
      labelB="GENRE"
      v-model="data.isChecked"
    />
  </section>
</template>
<script setup lang="ts">
import { defineEmits, reactive } from 'vue';
import SearchItem from '@/components/SearchItem.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { SearchBy } from '@/interface';

const data = reactive({
  isChecked: false,
});

const emit = defineEmits(['update:modelValue']);
const handlerSearchSubmit = function (value: string) {
  const searchBy = data.isChecked ? SearchBy.Genre : SearchBy.Title;
  emit('update:modelValue', {
    searchValue: value,
    searchBy: searchBy,
  });
};
</script>
<style scoped lang="scss">
.net-find-your-movie {
  background: #232323;
  padding: 40px;
}
</style>
