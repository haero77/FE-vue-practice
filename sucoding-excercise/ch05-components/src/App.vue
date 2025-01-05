<template>
  <FirstChild ref="childRef"/>
</template>

<script>
import FirstChild from '@/components/FirstChild.vue';

export default {
  components: {
    FirstChild,
  },
  mounted() {
    console.log(this.$refs.childRef.childNum); // 0
    console.log(this.$refs.childRef.childNumOddAdd); // 짝수
    console.log(this.$refs.childRef.getChildNum()); // 0
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
