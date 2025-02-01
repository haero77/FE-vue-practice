<template>
  <h1>count 변수: {{ state.count }}</h1>
  <button @click="state.count++">count 변수 증가</button>
</template>

<script setup>
import {ref, watch} from 'vue';

// 감시를 이용하여 count 변수의 값이 증가하면 콘솔에 로그를 출력한다.
const state = ref({
  count: 0,
});

watch(state, (currentValue, preValue) => {
      console.log(`count 변수가 ${preValue}에서 ${currentValue}(으)로 변경되었습니다.`);
    },
    {
      deep: true
    }
)
</script>
