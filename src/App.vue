<template>
  <header>
    <LogoItem primary="true" size="small" />
  </header>
  <main>
    <FindMovieSection v-model="data.searchData" />
    {{ data.searchData.searchValue }}, {{ data.searchData.searchBy }}
    <ResultsSection />
  </main>
  <footer>
    <LogoItem primary="true" size="large" />
  </footer>
</template>

<script setup lang="ts">
import LogoItem from './components/LogoItem.vue';
import ResultsSection from './components/ResultsSection.vue';
import FindMovieSection from './components/FindMovieSection.vue';
import { reactive } from 'vue';
import { ISearchData, SearchBy } from '@/interface';

const data = reactive({
  searchData: {
    searchValue: '',
    searchBy: SearchBy.Title,
  } as ISearchData,
});
</script>
