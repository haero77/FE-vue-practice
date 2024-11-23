<!--  html code -->
<template>
  <h1>영화 정보</h1>
  <div v-for="(movie, i) in movieData" :key="i">
    <h3 class="bg-yellow">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'App',
  data() {
    return {
      movieData: [
        {
          title: "트루먼 쇼",
          year: 1998,
          category: "드라마",
        },
        {
          title: "해리포터와 마법사의 돌",
          year: 2001,
          category: "드라마"
        },
        {
          title: "포레스트 검프",
          year: 1994,
          category: "드라마"
        }
      ]
    }
  }
}
</script>

<!-- css -->
<style>
.bg-yellow {
  background: gold;
}
</style>
