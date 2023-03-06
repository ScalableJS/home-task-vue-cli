<template>
  <FindMovieSection
    :searchValue="searchValue"
    :searchBy="searchBy"
    @update:modelValue="onUpdate"
  />
  <div class="net-sort-by">
    <ToggleSwitch
      label="SORT BY"
      label-a="RELEASE DATE"
      label-b="RATING"
      :primary="true"
      :sortBy="sortBy"
    />
  </div>
  <ResultsSection v-bind="props" />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { defineProps } from 'vue';
import router from '../router';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { SearchBy, SortBy } from '@/interface';

const props = defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  searchBy: {
    type: Number,
    default: SearchBy.Title,
  },
  sortBy: {
    type: Number,
    default: SortBy.ReleaseDate,
  },
});

const onUpdate = function ({
  searchValue,
  searchBy,
}: {
  searchValue: string;
  searchBy: number;
}) {
  router.push({
    path: 'search',
    query: {
      sv: searchValue,
      sb: searchBy,
    },
  });
};
</script>
<style scoped lang="scss">
.net-sort-by {
  margin-top: 20px;
  margin-right: 40px;
  display: flex;
  justify-content: end;
}
</style>
