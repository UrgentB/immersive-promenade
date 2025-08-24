<template>
<div class="card">
<div class="card-inner video-shell" @click="play">
<video ref="video" :src="src" preload="metadata" playsinline controlslist="nodownload noplaybackrate" style="width:100%;height:100%;display:none;border-radius:12px"></video>
<div v-show="!started" class="play"></div>
</div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ src: string }>()
const started = ref(false)
const video = ref<HTMLVideoElement>()
const play = () => {
if(started.value) return
started.value = true
const el = video.value!
el.style.display = 'block'
el.play()
}
</script>