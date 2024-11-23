"<!--  html code -->
<template>
  <h1>영화 정보</h1>
  <div v-for="(movie, i) in movieData" :key="i" class="movie-item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title">
    </figure>
    <div class="movie-info">
      <h3 class="bg-yellow">{{ movie.title }}</h3>
      <p>개봉: {{ movie.year }}</p>
      <p>장르: {{ movie.category }}</p>
      <button @click="increaseLikeCount(movie)">좋아요</button>
      <span>{{ movie.like }}</span>
      <p>
        <button @click="isModalOpened=true">상세보기</button>
      </p>
    </div>
  </div>

  <div class="modal" v-if="isModalOpened">
    <div class="inner">
      <h3>Detail</h3>
      <p>영화 상세 정보</p>
      <button @click="isModalOpened=false">닫기</button>
    </div>
  </div>
</template>

<!-- js -->
<script>
import "@/styles/main.css"

export default {
  name: 'App',
  data() {
    return {
      isModalOpened: false,
      movieData: [
        {
          title: "트루먼 쇼",
          category: "드라마",
          year: 1998,
          like: 0,
          imgUrl: require("@/assets/truman_show.jpg"),
        },
        {
          title: "해리포터와 마법사의 돌",
          category: "드라마",
          year: 2001,
          like: 0,
          imgUrl: require("./assets/harry_potter_wizard_stone.jpg"),
        },
        {
          title: "포레스트 검프",
          category: "드라마",
          year: 1994,
          like: 0,
          imgUrl: require("./assets/forrest_gump.jpg"),
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