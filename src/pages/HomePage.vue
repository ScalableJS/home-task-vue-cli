<template>
  <FindMovieSection v-model="data.searchData" />
  <div class="net-sort-by">
    <ToggleSwitch
      label="SORT BY"
      label-a="RELEASE DATE"
      label-b="RATING"
      :primary="true"
    />
  </div>
  <ResultsSection v-bind="data.searchData" />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { reactive, watch } from 'vue';
import router from '../router';
import { useRoute } from 'vue-router';
import ToggleSwitch from '@/components/ToggleSwitch.vue';

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
<style scoped lang="scss">
.net-sort-by {
  margin-top: 20px;
  margin-right: 40px;
  display: flex;
  justify-content: end;
}
</style>
