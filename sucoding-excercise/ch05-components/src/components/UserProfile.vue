<template>
  <div>
    <p>이름: {{ name }}</p>
    <p>나이: {{ age }}</p>
  </div>
</template>


<script>
export default {
  name: "UserProfile",
  // 속성값 전달 받을 시 props 속성 사용
  props: ['name', 'age'], // 사용자 정의 속성인 name, age값을 받음
  created() {
    // props의 기본 자료형은 string이다.
    console.log('typeof age:', typeof this.age);
  }
}
</script>


<style scoped>

</style>
