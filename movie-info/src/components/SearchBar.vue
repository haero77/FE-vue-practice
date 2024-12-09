<template>
  <div class="search-box">
    <input
        type="search"
        v-model="inputText"
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
