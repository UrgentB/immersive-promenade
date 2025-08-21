
<script setup lang="ts">
  import { ref, computed } from 'vue' 

  //Коллекция путей и их параметров
  const routesMap = new Map<string, string>();
  routesMap.set('tutova', 'тутова');
  routesMap.set('tamova', 'тамого');

  //Хранит текущий адрес
  const currentPath = ref(window.location.href)

  const hash = computed(() => {
    return window.location.href.split('/').pop()
  })

  //Считывает текущий адрес при изменении, но может не понадобится
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.href
  })

  const currentPlace = computed(() => {
    return routesMap.get(currentPath.value.split('/').pop() || '/') || 'Нигдемаго'
  })
  
</script>

<template>
  <div class="cap-container">
    <div class="cap">
      <div style="float: left;">По следам Фёдора</div>
      <button style="float: right;">Узнать больше</button>
    </div>
  </div>
  <table class="middle-block">
      <tr><h1>{{ currentPlace }}</h1></tr>
      <tr>
        <video :controls="true" src="/oUr70ixCiESIwRwIeHPtVECAIr6JzBqPAQzSAG.mp4">
        </video>
      </tr>
  </table>
  
</template>

<style scoped>
.cap-container {
  background: #F7AF4A;
  width: 100%;
}

.cap {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  padding: 15px 20px;
  box-sizing: border-box;
}

.middle-block{
  margin: 0 auto;
  width: 70%;
  background: #9BCA75;
  vertical-align: middle;
  align-self: center;
}
</style>