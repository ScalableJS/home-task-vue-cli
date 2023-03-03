<template>
  <div class="net-error-page not-found">
    <h1>Lost your way?</h1>
    <p>
      Sorry, we can't find that page. You'll find lots to explore on the home
      page.
    </p>
    <router-link to="/">
      <ButtonItem label="Netflix Home" :primary="true" />
    </router-link>
  </div>
</template>
<script setup lang="ts">
import ButtonItem from '@/components/ButtonItem.vue';
</script>
<style scoped lang="scss">
.net-error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
