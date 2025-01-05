<template>
  <h1>{{ customMessage }}</h1>
  <h2>{{ customReversedMessage }}</h2>
</template>


<script>
// provide 속성의 키를 symbol로 사용할 경우, 해당 데이터를 inject로 주입하려면 다음과 같이 import 필요!!
import {message, reversedMessage} from '@/provide-keys.js';

export default {
  // 상위 컴포넌트 App 에서 provide 한 데이터를 주입(inject) 받는다.
  inject: {
    customMessage: {
      from: message, // import 로 불러온 symbol 값
      default: 'default value',
    },
    customReversedMessage: {
      from: reversedMessage, // import 로 불러온 symbol 값
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
