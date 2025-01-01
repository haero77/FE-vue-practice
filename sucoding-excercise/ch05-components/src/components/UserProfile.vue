<template>
  <div>
    <!-- 자식 컴포넌트에서 부모 컴포넌트로 이벤트 발신  -->
    <!-- 이벤트 발신: 인라인 핸들러 발신  -->
    <button @click="$emit('print-hello')">Hello 클릭</button>
  </div>
  <div>
    <p>이름: {{ userName }}</p>
    <p>나이: {{ age }}</p>
  </div>
</template>


<script>
export default {
  userName: "UserProfile",
  // 속성값 전달 받을 시 props 속성 사용
  props: {
    userName: {
      type: String, // userName 속성값이 문자열인지 검사
      required: true, // userName 속성값이 필수인지 검사
      validator: function (value) {
        return value.length > 1;
      }
    },
    age: {
      type: Number,
      default: function () {
        return 10;
      },
    }
  },
  methods: {

  },
  created() {
    // props의 기본 자료형은 string이다.
    console.log('typeof age:', typeof this.age);
  }
}
</script>


<style scoped>

</style>
