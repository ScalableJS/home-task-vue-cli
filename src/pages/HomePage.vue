<template>
  <FindMovieSection v-model="data.searchData" />
  <ResultsSection v-bind="data.searchData" />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { reactive, watch } from 'vue';
import router from '../router';
import { useRoute } from 'vue-router';

const route = useRoute();

const data = reactive({
  searchData: {
    searchValue: route.query.sv,
    searchBy: Number(route.query.sb) || 0,
  },
});

watch(
  () => data.searchData,
  (data) => {
    router.push({
      path: 'search',
      query: {
        sv: data.searchValue,
        sb: data.searchBy,
      },
    });
  }
);
</script>
