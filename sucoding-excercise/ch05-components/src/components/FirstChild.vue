<template>
  <h1>{{ message }}</h1>
  <h2>{{ reversedMessage}}</h2>
</template>


<script>
export default {
  // 상위 컴포넌트 App 에서 provide 한 데이터를 주입(inject) 받는다.
  inject: ['message', 'reversedMessage'], // inject [key1, key2, ...] 형태로 사용
}
</script>

<style>
h1 {
  color: blue;
}

p {
  color: green;
}
</style>
