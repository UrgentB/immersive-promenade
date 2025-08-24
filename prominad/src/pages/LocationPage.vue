<!-- src/pages/LocationPage.vue (фрагмент) -->
<template>
  <AppHeader />

  <!-- ОБЁРТКА ДЛЯ СПИРАЛЕЙ -->
  <main class="container page-with-spirals" style="display:grid;gap:16px">
    <!-- спирали поверх всего контента этой страницы -->
    <img class="spiral spiral-tr" src="/images/tr-spiral.svg" alt="" />
    <img class="spiral spiral-bl" src="/images/dl-spiral.svg" alt="" />

    <!-- единая карточка: заголовок + видео + таймлайн -->
    <LocationPanel
      :title="data.title"
      :video-src="data.videoSrc"
      :prev="data.wherePrev"
      :here="data.whereHere"
      :next="data.whereNext"
      :order="data.order"
      :bullets="data.bulletsHere"
    />

    <!-- облако Фёдора / остальной контент -->
    <FedorBubble v-if="isLast" cta="Перейти к финалу" to="/final">
      Поздравляю! Маршрут завершён, и теперь вас ждут призы!
    </FedorBubble>
    <FedorBubble v-else :cta="data.cta?.text" :to="data.cta?.to">
      Я Фёдор — талисман Туристского центра «Череповец»! Хотите узнать больше о нашем проекте? Жмите на кнопку, и я вам всё расскажу!
    </FedorBubble>
  </main>

  <AppFooter />
</template>


<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import FedorBubble from '@/components/FedorBubble.vue'
import LocationPanel from '@/components/LocationPanel.vue'
import { useRoute, useRouter } from 'vue-router'
import { getLocationByRouteId } from '@/data/locations'

const route = useRoute()
const id = route.params.id as string
const data = getLocationByRouteId(id)
const isLast = data?.order === 9
if (!data) useRouter().replace('/')
</script>
