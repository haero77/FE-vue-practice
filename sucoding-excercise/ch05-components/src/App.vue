<template>
  <FirstChild />
</template>

<script>
// 지역 등록할 컴포넌트 불러오기.
// -> 지역 등록한 컴포넌트는 컴포넌트 등록한 곳에서만 사용 가능.
import FirstChild from '@/components/FirstChild.vue';

export default {
  components: { // components 속성을 통해 컴포넌트 할당
    FirstChild, // components 속성값은 import 키워드 뒤의 식별자 그대로 사용
  },
}
</script>

<style>

</style>
