<template>
  <div class="todo__input">
    <!-- 정의한 데이터 양방향 매핑 -->
    <input
        ref="todoInput"
        v-model="inputMsg"
        type="text"
        class="todo__input-text"
        placeholder="할 일을 입력하세요."
        @keydown.enter="addTodo"
    />
    <button class="todo__input-btn" @click="addTodo">등록</button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  emits: ["add-todo"],
  data() {
    return {
      inputMsg: '', // 데이터 정의 (사용자가 입력한 값)
    };
  },
  methods: {
    addTodo() {
      const trimmedInput = this.inputMsg.trim();

      if (!trimmedInput) {
        alert('할 일을 입력해주세요.');
        this.$refs.todoInput.focus(); // 입력창 포커스 유지
        return;
      }

      this.$emit("add-todo", this.inputMsg); // 부모 컴포넌트 이벤트 호출
      this.inputMsg = ""; // 입력 데이터 초기화
    }
  }
}
</script>


<style scoped>

</style>
