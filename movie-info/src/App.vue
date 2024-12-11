"<!--  html code -->
<template>
  <Navbar/>
  <Event :text="text[eventTextNum]"/>
  <SearchBar
      :movieData="movieDataTemp"
      @searchMovie="searchMovie($event)"
  />
  <p>
    <button class="show-all" @click="showAllMovies">전체보기</button>
  </p>
  <Movies
      :movieData="movieDataTemp"
      :isModalOpened="isModalOpened"
      @openModal="isModalOpened=true; selectedMovieId=$event"
      @increaseLike="increaseLikeCount($event)"
  />
  <Modal
      :movieData="movieData"
      :isModalOpened="isModalOpened"
      :selectedMovieId="selectedMovieId"
      @closeModal="isModalOpened=false"
  />
</template>

<!-- js -->
<script>
import "@/styles/main.css"
import movieData from "@/assets/movies";
import SearchBar from "@/components/SearchBar.vue";
import Navbar from "@/components/Navbar.vue";
import Event from "@/components/Event.vue";
import Modal from './components/Modal.vue';
import Movies from "@/components/Movies.vue";

export default {
  name: 'App',
  data() {
    return {
      isModalOpened: false,
      movieData: movieData,
      movieDataTemp: [...movieData], // 영화데이터 사본
      selectedMovieId: 0,
      text: [
          "트루먼 쇼 사이클",
          "해리포터와 마법사의 돌 사이클",
          "포레스트검프 사이",
      ],
      eventTextNum: 0,
      interval: null,
    }
  },
  // 컴포넌트 등록
  components: {
    Event: Event,
    Navbar: Navbar,
    Modal: Modal,
    Movies: Movies,
    SearchBar: SearchBar,
  },
  methods: {
    increaseLikeCount(movieId) {
      this.movieData.find(movie => {
        if (movie.id === movieId) {
          movie.like++;
        }
      })
    },
    searchMovie(movieTitle) {
      // 영화제목이 포함된 데이터를가져옴
      this.movieDataTemp = this.movieData.filter(movie => {
        return movie.title.includes(movieTitle);
      });
    },
    showAllMovies() {
      this.movieDataTemp = [...this.movieData];
    },
  },
  mounted() {
    console.log("mounted");
    this.interval = setInterval(() => {
      // text를 순환
      this.eventTextNum = (this.eventTextNum + 1) % this.text.length;
    }, 3000);
  },
  unmounted() {
    /**
     * 만약 이 컴포넌트가 제거(unmounted)될 때 타이머를 정리하지 않으면:
     *
     * 컴포넌트는 사라졌는데도 타이머는 계속 돌아가게 됨
     * 메모리를 계속 차지하게 됨
     * 심지어 존재하지 않는 컴포넌트의 eventTextNum을 변경하려고 시도할 수 있음
     */
    clearInterval(this.interval);
  }
}
</script>
