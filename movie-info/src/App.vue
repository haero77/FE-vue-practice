"<!--  html code -->
<template>
  <Navbar/>
  <Event :text="text"/>
  <Movies
      :movieData="movieData"
      :isModalOpened="isModalOpened"
      @openModal="isModalOpened=true; selectedMovie=$event"
      @increaseLike="increaseLikeCount($event)"
  />
  <Modal
      :movieData="movieData"
      :isModalOpened="isModalOpened"
      :selectedMovie="selectedMovie"
      @closeModal="isModalOpened=false"
  />
</template>

<!-- js -->
<script>
import "@/styles/main.css"
import movieData from "@/assets/movies";
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
      selectedMovie: 0,
      text: "props로 보낼 변수값 ~~~ ",
    }
  },
  // 컴포넌트 등록
  components: {
    Event: Event,
    Navbar: Navbar,
    Modal: Modal,
    Movies: Movies,
  },
  methods: {
    increaseLikeCount(movieIndex) {
      this.movieData[movieIndex].like++;
    },
  }
}
</script>