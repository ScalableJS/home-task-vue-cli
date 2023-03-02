<template>
  <FindMovieSection v-model="data.searchData" />
  {{ data.searchData.searchValue }}, {{ data.searchData.searchBy }}
  <ResultsSection />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { reactive } from 'vue';
import { ISearchData, SearchBy } from '@/interface';

const data = reactive({
  searchData: {
    searchValue: '',
    searchBy: SearchBy.Title,
  } as ISearchData,
});
</script>
