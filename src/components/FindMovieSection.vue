<template>
  <section>
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
import { reactive } from 'vue';
import SearchItem from '@/components/SearchItem.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';

const data = reactive({
  isChecked: false,
});

const handlerSearchSubmit = function (value: string) {
  alert(`${value}, ${data.isChecked}`);
};
</script>
