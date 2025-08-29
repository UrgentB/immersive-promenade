<template>
  <div class="card panel">
    <!-- Заголовок -->
    <div class="h1 loc-title">{{ title }}</div>

    <!-- Видео -->
    <div class="card-inner video-shell" @click="play">
      <video :controls="true" ref="video" :src="videoSrc" preload="metadata" playsinline controlslist="nodownload noplaybackrate"
        style="width:100%;height:100%;display:none;border-radius:12px"></video>
      <div v-show="!started" class="play"></div>
    </div>

    <!-- Где я нахожусь? -->
    <div class="h2">Где я нахожусь?</div>
    <div class="timeline">
      <div class="rail" aria-hidden="true"></div>

      <!-- Ранее -->
      <div v-if="prev" class="row">
        <div class="dot num">{{ order - 1 }}</div>
        <div class="txt">
          <div class="label">Ранее</div>
          <div class="title"><b>{{ prev }}</b></div>
        </div>
      </div>

      <!-- Я здесь -->
      <div class="row">
        <div class="dot pin">
          <svg viewBox="0 0 25 25" width="25" height="25">
            <path
              d="M12 2c-3.314 0-6 2.686-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor" />
          </svg>
        </div>
        <div class="txt">
          <div class="label">Я здесь</div>
          <div class="title"><b>{{ here }}</b></div>
          <ul v-if="bullets?.length" class="bullets">
            <li v-for="(b, i) in bullets" :key="i">{{ b }}</li>
          </ul>
        </div>
      </div>

      <!-- Далее -->
      <div v-if="next" class="row">
        <div class="dot num">{{ order + 1 }}</div>
        <div class="txt">
          <div class="label">Далее</div>
          <div class="title"><b>{{ next }}</b></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  title: string
  videoSrc: string
  prev?: string
  here: string
  next?: string
  order: number
  bullets?: string[]
}>()

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
  display: grid;
  gap: 16px;
}

/* ===== видео ===== */
.video-shell {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16/9;
  background: #FFF8E9;
  border-radius: 12px
}

.play {
  width: 92px;
  height: 92px;
  background: #A2D480;
  border-radius: 999px;
  display: grid;
  place-items: center
}

.play:after {
  content: "";
  border-style: solid;
  border-width: 12px 0 12px 18px;
  border-color: transparent transparent transparent #fff;
  margin-left: 4px
}

/* ===== таймлайн ===== */
.timeline{
  /* настраиваемые переменные */
  --pad-left: 0px;   /* твой отступ под колонку с точками */
  --col: 38px;        /* ширина колонки с точками */
  --dot: 38px;        /* диаметр кружка */
  --rail-w: 4px;      /* толщина линии */

  position: relative;
  display: grid;
  row-gap: 14px;
  padding-left: var(--pad-left);
}

.rail{
  position: absolute;
  /* центр линии = pad-left + col/2; сдвигаем влево на половину толщины */
  left: calc(var(--pad-left) + var(--col)/2 - var(--rail-w)/2);
  top: calc(var(--dot) / 2);      /* не лезем выше первого кружка */
  bottom: calc(var(--dot) / 2);   /* и ниже последнего */
  width: var(--rail-w);
  background: var(--light-text);
  border-radius:2px;
}

.row{
  display: grid;
  grid-template-columns: var(--col) 1fr;
  column-gap: 16px;
  align-items: start;
}

.dot{
  width: var(--dot);
  height: var(--dot);
  border-radius: 50%;
  background: var(--light-text);
  color: var(--text);
  display: grid;
  place-items: center;
  font-weight: 800;
  z-index: 1; /* чтобы лежало поверх линии */
}

.dot.num {
  font-size: 20px;
  line-height: 1;
}

.dot.pin {
  color: var(--text);
}

.txt .label {
  font-size: 14px;
  opacity: .8;
}

.txt .title {
  font-size: 20px;
  line-height: 1.15;
}

.bullets {
  margin: 8px 0 0 0;
  padding-left: 18px;
  list-style: disc;
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

.loc-title{
  position: relative;
  z-index: 6;      /* больше, чем у .spiral (5) */
}

</style>
