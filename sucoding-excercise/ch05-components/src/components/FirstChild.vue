<template>
  <h1>{{ customMessage }}</h1>
  <h2>{{ customReversedMessage}}</h2>
</template>


<script>
export default {
  // 상위 컴포넌트 App 에서 provide 한 데이터를 주입(inject) 받는다.
  inject: {
    customMessage: {
      from: 'message',
      default: 'default value',
    },
    customReversedMessage: {
      from: 'reversedMessage',
      default: 'default value',
    },
  }
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
