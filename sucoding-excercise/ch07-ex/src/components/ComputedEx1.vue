<template>
  <h1>{{ refDoubleCount }}</h1>
  <h1>{{ reactiveDoubleCount }}</h1>
</template>

<script setup>
import {ref, reactive, computed} from 'vue'

const refCount = ref(1);
const reactiveCount = reactive({count: 2});

const refDoubleCount = computed(() => refCount.value * 2);
const reactiveDoubleCount = computed(() => reactiveCount.count * 2);

setTimeout(() => {
  refDoubleCount.value = 20; // computed 변수는 재할당 불가해서 콘솔에 경고 표시 뜬다.
}, 2000);
</script>
