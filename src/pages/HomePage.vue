<template>
  <FindMovieSection
    :searchValue="searchValue"
    :searchBy="searchBy"
    @update:modelValue="onUpdateFindMovieSection"
  />
  <div class="net-header-result">
    <div class="net-movie-found">{{ filteredMovies.length }} movie found</div>
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
  </div>
  <ResultsSection :movies="filteredMovies" />
</template>
<script setup lang="ts">
import ResultsSection from '../components/ResultsSection.vue';
import FindMovieSection from '../components/FindMovieSection.vue';
import { computed, defineProps, onMounted } from 'vue';
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

const filteredMovies = computed(() => {
  if (props.searchBy === SearchBy.Title) {
    return store.getters.filteredMoviesByTitle(props.searchValue, props.sortBy);
  } else {
    return store.getters.filteredMoviesByGenre(props.searchValue, props.sortBy);
  }
});
</script>
<style scoped lang="scss">
.net-header-result {
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

.net-sort-by {
  margin-left: auto;
}
</style>
