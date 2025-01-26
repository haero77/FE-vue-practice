<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <div
        v-for="todoItem in computedTodo"
        :key="todoItem.id" class="todo__item"
        :class="{'todo__item--completed': todoItem.completed}">
      <input
          type="checkbox"
          :id="`chk${todoItem.id.toString()}`"
          :checked="todoItem.completed"
          @click="updateTodo(todoItem.id)"/>
      <!-- input 태그 id값과 label 태그 for값 일치하면 label 태그 클릭 시 input 태그 클릭 됨. -->
      <label
          :for="`chk${todoItem.id.toString()}`"
          class="todo__checkbox-label"></label>
      <span class="todo__item-text">{{ todoItem.msg }}</span>
      <span
          class="material-symbols-outlined todo__delete-icon"
          @click="deleteTodo(todoItem.id)">delete</span>
    </div>
    <!-- 할 일 목록이 없을 때 -->
    <div v-if="computedTodo.length === 0" class="todo__item--no">
      <p>할일 목록이 없습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    computedTodo: {
      type: Array,
      required: true
    }
  },
  methods: {
    // 할 일 삭제
    updateTodo(todoItemId) {
      console.log('updateTodo', todoItemId);
      this.$emit('update-todo', todoItemId);
    },
    deleteTodo(todoItemId) {
      console.log('deleteTodo', todoItemId);
      this.$emit('delete-todo', todoItemId);
    },
  }
}
</script>


<style scoped>

</style>
