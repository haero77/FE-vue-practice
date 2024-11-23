"<!--  html code -->
<template>
  <Navbar />
  <Event :text="text"/>
  <h1>영화 정보</h1>
  <div v-for="(movie, movieIndex) in movieData" :key="movieIndex" class="movie-item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title">
    </figure>
    <div class="movie-info">
      <h3 class="bg-yellow">{{ movie.title }}</h3>
      <p>개봉: {{ movie.year }}</p>
      <p>장르: {{ movie.category }}</p>
      <button @click="increaseLikeCount(movieIndex)">좋아요</button>
      <span>{{ movie.like }}</span>
      <p>
        <button @click="isModalOpened=true; selectedMovie=movieIndex">상세보기</button>
      </p>
    </div>
  </div>
<!--  <Modal />-->
</template>

<!-- js -->
<script>
import "@/styles/main.css"
import movieData from "@/assets/movies";
import Navbar from "@/components/Navbar.vue";
import Event  from "@/components/Event.vue";
// import Modal from './components/Modal.vue';

export default {
  name: 'App',
  data() {
    return {
      isModalOpened: false,
      movieData: movieData,
      selectedMovie: 0,
      text: "props로 보낼 변수값 ~~~ ",
    }
  },
  methods: {
    increaseLikeCount(movieIndex) {
      this.movieData[movieIndex].like++;
    }
  },
  // 컴포넌트 등록
  components: {
    Event: Event,
    Navbar: Navbar,
    // Modal: Modal
  }
}
</script>