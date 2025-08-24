<template>
  <header class="app-header container">
    <div class="logo-wrap">
      <img src="/images/text-logo.svg" alt="По следам Фёдора" class="logo" />
    </div>
    <a class="btn header-btn" :href="aboutHref">Узнать больше</a>
  </header>
</template>

<script setup lang="ts">
const aboutHref = '/about'
</script>

<style scoped>
.app-header{
  display:flex;
  justify-content:space-between;
  align-items: center;
  gap:16px;
  height: 58px;
  background: #FFF8E9;
}
</style>
