<template>
  <div class="search-box">
    <input
        type="search"
        @change="
          $emit('searchMovie', $event.target.value);
          inputText = $event.target.value;
          $event.target.value = '';
        "
        placeholder="검색어 입력">
    <button>검색</button>
  </div>
  <p>{{ inputText }}</p>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      inputText: "",
    }
  },
  props: {
    movieData: {
      type: Array,
      required: true
    }
  },
  watch: {
    inputText(movieName) {
      const filteredMovies = this.movieData.filter(movie => {
        return movie.title.includes(movieName);
      });

      if (filteredMovies.length === 0) {
        alert("검색 결과가 없습니다.")
      }
    },
  }
}
</script>

<style scoped>
.search-box {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.search-box input {
  padding: 5px 10px;
}

.search-box button {
  margin: 0;
}
</style>
