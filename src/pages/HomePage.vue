<template>
  <FindMovieSection
    :searchValue="searchValue"
    :searchBy="searchBy"
    @update:modelValue="onUpdateFindMovieSection"
  />
  <div class="net-sort-by">
    <ToggleSwitch
      label="SORT BY"
      label-a="RELEASE DATE"
      label-b="RATING"
      :primary="true"
      :sortBy="sortBy"
      @update:modelValue="onUpdateSortBy"
    />
  </div>
  <ResultsSection v-bind="props" />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { defineProps, onMounted } from 'vue';
import router from '../router';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import { SearchBy, SortBy } from '@/interface';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();

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

const updateSearchData = ({
  searchValue = props.searchValue,
  searchBy = Number(props.searchBy),
  sortBy = Number(props.sortBy),
}: {
  searchValue?: string;
  searchBy?: number | boolean;
  sortBy?: number | boolean;
}) => {
  store.dispatch('updateSearchData', {
    searchValue: searchValue,
    searchBy: Number(searchBy),
    sortBy: Number(sortBy),
  });
  router.push({
    path: 'search',
    query: {
      sv: searchValue,
      sb: Number(searchBy).toString(),
      sort: Number(sortBy).toString(),
    },
  });
};

const onUpdateFindMovieSection = function ({
  searchValue,
  searchBy,
}: {
  searchValue: string;
  searchBy: number;
}) {
  updateSearchData({
    searchValue,
    searchBy,
  });
};

const onUpdateSortBy = function (value: boolean) {
  updateSearchData({
    sortBy: value,
  });
};

onMounted(() => {
  if (route.name === 'search') {
    updateSearchData({});
  }
});
</script>
<style scoped lang="scss">
.net-sort-by {
  margin-top: 20px;
  margin-right: 40px;
  display: flex;
  justify-content: end;
}
</style>
