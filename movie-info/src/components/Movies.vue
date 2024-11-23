<template>
  <div class="container">
    <h1>영화 정보</h1>
    <div v-for="(movie, movieIndex) in movieData" :key="movieIndex" class="movie-item">
      <figure>
        <img :src="`${movie.imgUrl}`" :alt="movie.title">
      </figure>
      <div class="movie-info">
        <h3 class="bg-yellow">{{ movie.title }}</h3>
        <p>개봉: {{ movie.year }}</p>
        <p>장르: {{ movie.category }}</p>
        <button @click="$emit('increaseLike', movieIndex)">좋아요</button>
        <span>{{ movie.like }}</span>
        <p>
          <button @click="$emit('openModal', movieIndex)">상세보기</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoviesComponent",
  props: {
    movieData: Array,
    selectedMovie: Number,
  },
}
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>