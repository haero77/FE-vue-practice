<template>
  <h1>ref: {{ count }}</h1>
  <button @click="count++">ref 증가</button>
  <h1>reactive: {{ state.count }}</h1>
  <button @click="state.count++">reactive 증가</button>
</template>

<script setup>
import {reactive, ref, watch, watchEffect} from 'vue';

const count = ref(0);
const state = reactive({
  count: 0,
});

/**
 * 아무 의미도 없이 console.log()로 출력해도,
 * 콜백 함수 내부에서 반응형 데이터를 사용한 것이 되어 감시 대상이 됨.
 */
watchEffect(() => {
  // count 또는 state.count 값이 변경되면 아래 로그가 모두 출력됨.
  // 여러 반응형 데이터를 사용하여 둘 중 하나만 변경되어도 실행됨.
  console.log(`ref: ${count.value}`);
  console.log(`reactive: ${state.count}`);
});
</script>
