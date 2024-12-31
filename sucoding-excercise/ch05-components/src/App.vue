<template>
  <FirstChild/>

  <!-- 컴포넌트를 사용할 때 컴포넌트와 함께 속성 정의: '사용자 정의 속성(name, age)'  -->
  <!-- 정의한 사용자 속성값은 컴포넌트로 전달된다  -->
  <!--  <UserProfile name="김철수" age="30"/>-->
  <!-- v-bind 디렉티브 사용 시 원래 값의 자료형으로 전달됨(기본형은 string)  -->
  <UserProfile :name="`김철수`" :age="30"/>
</template>

<script>
// 지역 등록할 컴포넌트 불러오기.
// -> 지역 등록한 컴포넌트는 컴포넌트 등록한 곳에서만 사용 가능.
import FirstChild from '@/components/FirstChild.vue';
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: { // components 속성을 통해 컴포넌트 할당
    FirstChild, // components 속성값은 import 키워드 뒤의 식별자 그대로 사용
    UserProfile
  },
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
