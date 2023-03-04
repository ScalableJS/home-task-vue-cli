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
import { defineProps, reactive, watch } from 'vue';
import router from '../router';
import ToggleSwitch from '@/components/ToggleSwitch.vue';

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  searchBy: {
    type: Number,
    default: 0,
  },
});

const data = reactive({
  searchData: {
    searchValue: props.searchValue,
    searchBy: props.searchBy,
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
