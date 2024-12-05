<template>
  <div class="event" :class="{show : isOpen}">
    <!-- props를 이용해서 App.vue에서 데이터 전달받기  -->
    <p>{{ text }}</p>
    <button @click="close">X</button>
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
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    close () {
      this.isOpen = false;
    },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
}

.show {
  display: block;
}

.event p {
  margin: 0;
}

.event button {
  margin: 0;
}
</style>
