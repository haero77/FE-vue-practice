<template>
  <h1>총합: {{ numberSum }}</h1>
  <h1>ref: {{ count }}</h1>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="expressFunc">ref 증가</button>
  <button @click="arrowFunc">reactive 증가</button>
</template>

<script setup>
import {ref, reactive, computed} from "vue";

/**
 * 반응형 데이터 정의
 */
const count = ref(0);
const state = reactive({
  count: 0,
  message: "Hello, Vue 3!"
});

const numberSum = computed(() => count.value + state.count);

const expressFunc = function () {
  count.value++;
};
const arrowFunc = () => {
  state.count++;
};
</script>
