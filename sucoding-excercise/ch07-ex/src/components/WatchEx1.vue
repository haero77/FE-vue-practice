<template>
  <h1>count 변수: {{ count }}</h1>
  <button @click="count++">count 변수 증가</button>
</template>

<script setup>
import {ref, watch} from 'vue';

// 감시를 이용하여 count 변수의 값이 증가하면 콘솔에 로그를 출력한다.
const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count 변수가 ${oldValue}에서 ${newValue}(으)로 변경되었습니다.`);
})
</script>
