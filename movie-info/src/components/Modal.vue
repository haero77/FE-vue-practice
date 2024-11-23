<template>
  <div class="modal" v-if="isModalOpened">
    <div class="inner">
      <h3>{{ movieData[selectedMovie].title }}</h3>
      <p>영화 상세 정보</p>
      <button @click="isModalOpened=false">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
}
</script>

<style>

</style>