<template>
  <h1>count: {{ count  }}</h1>
  <h1>state: {{ state }}</h1>
</template>

<script setup>
import {ref, reactive} from 'vue'

const count = ref(0);
const state = reactive({
  message: 'Hello Vue 3'
});
</script>

<style scoped>

</style>
