<!--  html code -->
<template>
  <h1>영화 정보</h1>
  <div v-for="(movie, i) in movieData" :key="i">
    <h3 class="bg-yellow">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
    <button @click="increaseLikeCount(movie)">좋아요</button>
    <span>{{ movie.like }}</span>
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
          category: "드라마",
          year: 1998,
          like: 0,
        },
        {
          title: "해리포터와 마법사의 돌",
          category: "드라마",
          year: 2001,
          like: 0,
        },
        {
          title: "포레스트 검프",
          category: "드라마",
          year: 1994,
          like: 0,
        }
      ]
    }
  },
  methods: {
    increaseLikeCount(movie) {
      movie.like++;
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
