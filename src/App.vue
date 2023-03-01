<template>
  <header>
    <LogoItem primary="true" size="small" />
  </header>
  <main>
    <FindMovieSection />
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
</script>
