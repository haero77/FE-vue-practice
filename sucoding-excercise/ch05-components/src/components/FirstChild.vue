<template>

</template>


<script>
export default {
  data() {
    return {
      childNum: 0,
    };
  },
  computed: {
    childNumOddAdd() {
      return this.childNum % 2 === 0 ? '짝수' : '홀수';
    },
  },
  methods:{
    getChildNum() {
      return this.childNum;
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
