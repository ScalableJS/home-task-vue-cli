<template>
  <header>
    <LogoItem :primary="true" size="small" />
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <LogoItem :primary="true" size="large" />
  </footer>
</template>
<script setup lang="ts">
import LogoItem from './components/LogoItem.vue';
</script>
