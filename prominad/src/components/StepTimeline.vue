<template>
  <div class="card">
    <div class="h2">Где я нахожусь?</div>

    <div class="timeline">
      <!-- Единая вертикальная линия -->
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
          <svg viewBox="0 0 24 24" width="16" height="16">
            <path
              d="M12 2c-3.314 0-6 2.686-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div class="txt">
          <div class="label">Я здесь</div>
          <div class="title"><b>{{ here }}</b></div>
          <!-- Буллеты именно здесь -->
          <ul v-if="bullets?.length" class="bullets">
            <li v-for="(b,i) in bullets" :key="i">{{ b }}</li>
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
defineProps<{
  prev?: string
  here: string
  next?: string
  order: number
  bullets?: string[]
  framed?: boolean   // NEW
}>()
</script>


<style scoped>
/* Вся зона таймлайна */
.timeline{
  position: relative;
  display: grid;
  row-gap: 14px;
  padding-left: 48px; /* место под кружок + отступ текста */
}

/* Непрерывная линия строго через центры кружков */
.rail{
  position: absolute;
  left: 16px; /* центр кружка (ниже width:32px => 16px) */
  top: 0;
  bottom: 0;
  width: 2px;
  background: #fff;
}

/* Строка */
.row{
  display: grid;
  grid-template-columns: 32px 1fr;/* 32px = ширина кружка */
  column-gap: 16px;
  align-items: start;
  position: relative;
}

/* Кружки */
.dot{
  width: 32px; height: 32px;
  border-radius: 999px;
  border: 2px solid #7DBB5A;
  background: #fff;
  color: #143016;
  display: grid; place-items: center;
  font-weight: 800;
  z-index: 1; /* поверх белой линии */
}
.dot.num{ font-size: 14px; line-height: 1; }
.dot.pin{
  background: #7DBB5A;
  border-color: #7DBB5A;
  color: #fff; /* svg использует currentColor */
}

/* Текст */
.txt .label{ font-size:14px; opacity:.8; }
.txt .title{ font-size:20px; line-height:1.15; }

/* Буллеты под “Я здесь” */
.bullets{ margin: 8px 0 0 0; padding-left: 18px; list-style: disc; }
</style>
