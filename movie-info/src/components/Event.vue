<template>
  <div class="event">
    <!-- props를 이용해서 App.vue에서 데이터 전달받기  -->
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "EventComponent",
  /**
   * props로 변수 등록
   */
  props: {
    text: String, // 들어오는 값의 타입 검증
  }
}
</script>

<style scoped>
.event {
  background: #444;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  font-size: small;
}

.event p {
  margin: 0;
}
</style>