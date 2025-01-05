<template>
  <FirstChild/>
</template>

<script>
import FirstChild from '@/components/FirstChild.vue';

export default {
  components: { // components 속성을 통해 컴포넌트 할당
    FirstChild, // components 속성값은 import 키워드 뒤의 식별자 그대로 사용
  },
  // provide: 컴포넌트에서 정의한 데이터를 컴포넌트 트리 구조로 연결된 하위 컴포넌트에 공유.
  // App -> FirstChild -> SecondChild 로 전달하는게 아니고, App -> SecondChild로 바로 쓸 수 있음
  provide() {
    return {
      // message: this.message,
      reversedMessage: this.reversedMessage,
    };
  },
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  }
}
</script>

<style scoped>
/*
  scoped 사용 시 스타일 적용 범위는 현재 컴포넌트로 한정됨.
  즉 아래의 스타일이 FirstChild 컴포넌트에 적용되지 않음.
 */
/*
 scoped 사용안 할 경우 부모 컴포넌트 App에서 작성한 스타일은
 자식 컴포넌트 FirstChild에 영향을 미침.
 */

h1, p {
  color: orange !important;
}
</style>
