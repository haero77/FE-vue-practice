<template>
  <div class="todo__list">
    <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
    <div
        v-for="todoItem in computedTodo"
        :key="todoItem.id" class="todo__item"
        :class="{'todo__item--completed': todoItem.completed}">
      <!-- 투두 체크박스 -->
      <input
          type="checkbox"
          :id="`chk${todoItem.id.toString()}`"
          :checked="todoItem.completed"
          @click="checkTodo(todoItem.id)"/>
      <!-- input 태그 id값과 label 태그 for값 일치하면 label 태그 클릭 시 input 태그 클릭 됨. -->
      <label
          :for="`chk${todoItem.id.toString()}`"
          class="todo__checkbox-label"></label>

      <!-- 텍스트/수정 영역  -->
      <!-- 일반 모드: 텍스트로 표시     -->
      <span v-if="todoItem.id !== editingTodoId" class="todo__item-text">
        {{ todoItem.msg }}
      </span>

      <!-- 수정 모드: input으로 표시 -->
      <input
          v-else
          v-model="editingTodoMsg"
          type="text"
          class="todo__edit-input"
          @keyup.enter="updateTodoMsg"
          @keyup.esc="cancelEditingTodoMsg"
          v-focus
      />

      <!-- 투두 텍스트 수정 버튼 -->
      <span
          class="material-symbols-outlined"
          @click="startEditingTodoMsg(todoItem)">edit</span>
      <!-- 투두 삭제 버튼 -->
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
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  props: {
    computedTodo: {
      type: Array,
      required: true
    }
  },
  emits: [
    'check-todo',
    'delete-todo',
    'update-todo-msg'
  ],
  data() {
    return {
      editingTodoId: null, // 수정 중인 투두 아이템의 id
      editingTodoMsg: ''
    }
  },
  methods: {
    checkTodo(todoItemId) {
      console.log('updateTodo', todoItemId);
      this.$emit('check-todo', todoItemId);
    },
    deleteTodo(todoItemId) {
      console.log('deleteTodo', todoItemId);
      this.$emit('delete-todo', todoItemId);
    },
    startEditingTodoMsg(todoItem) {
      this.editingTodoId = todoItem.id;
      this.editingTodoMsg = todoItem.msg;
    },
    updateTodoMsg() {
      const trimmedMsg = this.editingTodoMsg.trim();
      if (!trimmedMsg) {
        alert('할 일을 입력해주세요.');
        return;
      }

      // 부모 컴포넌트에 수정된 내용 전달
      this.$emit('update-todo-msg', {
        id: this.editingTodoId,
        msg: trimmedMsg
      });

      // 수정 완료 후 초기화
      this.editingTodoId = null;
      this.editingTodoMsg = '';
    },
    cancelEditingTodoMsg() {
      this.editingTodoId = null;
      this.editingTodoMsg = '';
    }
  },
};
</script>


<style scoped>

</style>
