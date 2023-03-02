<template>
  <FindMovieSection v-model="data.searchData" />
  <ResultsSection v-bind="data.searchData" />
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
