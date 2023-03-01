<template>
  <header>
    <LogoItem primary="true" size="small" />
  </header>
  <main>
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
    <ResultsSection />
  </main>
  <footer>
    <LogoItem primary="true" size="large" />
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, reactive } from 'vue';
import LogoItem from './components/LogoItem.vue';
import SearchItem from './components/SearchItem.vue';
import ToggleSwitch from './components/ToggleSwitch.vue';
import ResultsSection from './components/ResultsSection.vue';

defineComponent({ SearchItem, LogoItem, ToggleSwitch });

const data = reactive({
  isChecked: false,
});

const handlerSearchSubmit = function (value: string) {
  alert(`${value}, ${data.isChecked}`);
};
</script>
