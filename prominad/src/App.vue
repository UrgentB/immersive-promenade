<script setup lang="ts">
  let place:string = '1. Площадь Милютина'
</script>

<template>
  <div class="cap-container">
    <div class="cap">
      <div style="float: left;">По следам Фёдора</div>
      <button style="float: right;">Узнать больше</button>
    </div>
  </div>
  <table class="middle-block">
      <tr><h1>{{ place }}</h1></tr>
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