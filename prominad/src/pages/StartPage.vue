<template>
<AppHeader />
<main class="container" style="display:grid;gap:16px">
<div class="card">
<div class="h1">Иммерсивный променад <br/>по Череповцу</div>
<div class="lead" style="margin-top:10px">Изучите город вместе с корги Фёдором, сканируйте QR-коды на маршруте и смотрите видео.</div>
</div>


<div class="card">
<div class="h2">Как принять участие?</div>
<ol class="lead" style="margin-left:16px">
<li>Получите маршрутный лист в Туристском центре «Череповец» (Советский просп., д. 31).</li>
<li>Сканируйте QR-коды на локациях и смотрите видео.</li>
<li>Заполняйте лист и возвращайтесь за призами.</li>
</ol>
</div>


<div class="card">
<div class="h2">Ссылки на страницы (для тестов)</div>
<div style="display:flex;flex-wrap:wrap;gap:8px">
<router-link v-for="id in ids" :key="id" class="btn" :to="`/l/${id}`">/l/{{ id }}</router-link>
</div>
</div>
</main>
<AppFooter />
</template>
<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import { LOCATIONS } from '@/data/locations'
const ids = Object.keys(LOCATIONS)
</script>