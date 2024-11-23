<template>
  <div class="modal" v-if="isModalOpened">
    <div class="inner">
      <h3>{{ movieData[selectedMovie].title }}</h3>
      <p>영화 상세 정보</p>
      <!-- 부모 컴포넌트의 데이터 변경: 이벤트 생성 -->
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    movieData: Array,
    isModalOpened: Boolean,
    selectedMovie: Number,
  }
}
</script>

<style>

</style>