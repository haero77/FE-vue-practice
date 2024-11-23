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
import movieData from "@/assets/movies";

export default {
  name: 'App',
  data() {
    return {
      isModalOpened: false,
      movieData: movieData,
    }
  },
  methods: {
    increaseLikeCount(movie) {
      movie.like++;
    }
  }
}
</script>