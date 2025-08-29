<template>
    <AppHeader />

    <main class="container page-with-spirals" style="display:grid;gap:16px">
        <!-- Декоративные спирали поверх контента -->
        <img class="spiral spiral-tr" src="/images/tr-spiral.svg" alt="" />
        <img class="spiral spiral-bl" src="/images/dl-spiral.svg" alt="" />

        <div class="card panel">
            <!-- Заголовок -->
            <div class="h1">ФИНАЛ</div>

            <!-- Видео -->
            <div class="card-inner video-shell" @click="play">
                <video ref="video" :src="'/videos/final.mp4'" preload="metadata" playsinline
                    controlslist="nodownload noplaybackrate"
                    style="width:100%;height:100%;display:none;border-radius:12px" />
                <div v-show="!started" class="play"></div>
            </div>

            <div class="h2">Поздравляем!</div>
            <p class="lead">
                Вы прошли все 9 точек маршрута и узнали массу интересной информации о городе. Чтобы сохранить
                приятные воспоминания, мы предлагаем вам вернуться обратно в Туристский центр "Череповец" (Советский проспект 31, 3 этаж, оф. 312), чтобы получить
                долгожданные призы.
            </p>
        </div>

        <FedorBubble>
            Спасибо за помощь, друзья! Мне было очень приятно провести с вами время. Я всегда жду вас в гости
            на улицах нашего Череповца!
        </FedorBubble>
    </main>

    <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import FedorBubble from '@/components/FedorBubble.vue'
import { ref } from 'vue'

const started = ref(false)
const video = ref<HTMLVideoElement>()
const play = () => {
    if (started.value) return
    started.value = true
    const el = video.value!
    el.style.display = 'block'
    el.play()
}
</script>

<style scoped>
.panel {
    display: flex;
    flex-direction: column;
}

h1,
.h1 {
    font-family: Rubik;
    font-weight: 800;
    font-style: ExtraBold;
    font-size: 20px;
    line-height: 17px;
    letter-spacing: 0%;
    vertical-align: middle;
    margin-bottom: 20px;
}

h2,
.h2 {
    font-family: Rubik;
    font-weight: 800;
    font-style: ExtraBold;
    font-size: 20px;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
}

/* ------- спирали ------- */
.page-with-spirals {
    position: relative;
    isolation: isolate;
}

.spiral {
    position: absolute;
    z-index: 5; /* выше карточек/видео/текста */
    pointer-events: none; /* не блокируют клики */
}
</style>
