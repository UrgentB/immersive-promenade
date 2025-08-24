<template>
<div class="fedor-block">
<!-- Облако: внешняя svg-картинка из /public/images/Bubble.svg -->
<div class="bubble-wrap">
<img src="/images/Bubble.svg" alt="Реплика Фёдора" class="bubble-img" />
<div class="bubble-content">
<div class="lead"><slot /></div>
<div v-if="to" class="btn-wrap">
<router-link class="btn" :to="to">{{ cta }}</router-link>
</div>
</div>
</div>


<!-- Фёдор — отдельно под облаком, слегка смещён вправо -->
<img src="/images/mascot-corgi.svg" alt="Фёдор" class="mascot" />
</div>
</template>


<script setup lang="ts">
withDefaults(defineProps<{ cta?: string; to?: string }>(), { cta: 'Узнать больше', to: undefined })
</script>


/* feodorBubble.vue */
<style scoped>
.fedor-block{
  display:flex;
  flex-direction:column;
  align-items:center;
}

/* Облако */
.bubble-wrap{ position:relative; width:min(560px, 100%);}
.bubble-img{ display:block; width:100%; height:auto; }
.bubble-content{
  position:absolute;
  inset: 20px 28px 58px 28px; /* top right bottom left */
  display:flex; 
  flex-direction:column; 
  align-items:center; 
  text-align:center;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;       /* Medium по Google Fonts */
  font-style: normal;
  font-size: 14px;
  line-height: 17px;      /* вместо leading-trim */
  letter-spacing: 0;
  text-align: center;
  vertical-align: middle;
}

/* Текст именно внутри облака */
.bubble-content .lead {
  font-size: 14px;
  line-height: 1.4;
}

.btn-wrap{ margin-top:12px; }

/* Талисман */
.mascot{ width:220px; height:auto; transform:translateX(100px); margin-top:6px; }

@media (max-width: 420px){
  .mascot{ width:200px; transform:translateX(60px); }
  .bubble-content{ inset: 18px 20px 56px 20px; }
}
</style>
