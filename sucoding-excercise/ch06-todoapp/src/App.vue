<template>
  <div class="todo">
    <TodoHeader
        :current-todo-status="currentTodoStatus"
        @update-tab="updateTab"/>
    <TodoList
        :computed-todo="computedTodo"
        @update-todo="toggleTodoComplete"
        @delete-todo="deleteTodo"/>
    <TodoInput
        @add-todo="addTodo"/>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoList from "@/components/TodoList.vue";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput
  },
  data() {
    return {
      todoList: [], // 할 일 목록을 저장하고 있는 배열. todoItem 객체를 요소로 가짐.
      currentTodoStatus: 'all'
    }
  },
  computed: {
    computedTodo() {
      if (this.currentTodoStatus === 'all') {
        return this.todoList;
      }
      if (this.currentTodoStatus === 'completed') {
        return this.todoList.filter(todo => todo.completed);
      }
    },
  },
  methods: {
    updateTab(tab) {
      this.currentTodoStatus = tab;
    },
    addTodo(todoInputMsg) {
      console.log(todoInputMsg);

      const todoItem = {
        id: Math.random(), // 고유값
        msg: todoInputMsg, // 할 일 텍스트
        completed: false // 할 일 완료 여부
      };
      this.todoList.push(todoItem);
    },
    toggleTodoComplete(todoItemIdToToggle) {
      this.todoList = this.todoList.map(todoItem =>
          // 스프레드 연산자(...)를 사용해 모든 속성을 복사하고
          // completed 속성만 반전시킨 새로운 객체를 만든다.
          todoItem.id === todoItemIdToToggle ? { ...todoItem, completed: !todoItem.completed } : todoItem
      )
    },
    deleteTodo(todoItemId) {
      this.todoList = this.todoList.filter(todoItem => todoItem.id !== todoItemId);
    }
  }
}
</script>

<style></style>
