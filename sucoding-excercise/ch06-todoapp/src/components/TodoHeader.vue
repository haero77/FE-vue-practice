<template>
  <div class="todo__title">
    <h1 class="todo__text">Todo List</h1>
    <ul class="todo__tab">
      <li :class="{'todo__tab--active': currentTodoStatus === 'all'}"
          @click="updateTab('all')">전체
      </li>
      <li :class="{'todo__tab--active': currentTodoStatus === 'completed'}"
          @click="updateTab('completed')">완료
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentTodoStatus: {
      type: String,
      required: true,
      validator(value) {  // prop 값 검증 추가
        return ['all', 'completed'].includes(value)
      }
    },
  },
  emits: ['update-tab'],
  methods: {
    updateTab(tab) {
      this.$emit('update-tab', tab);
    },
  }
}
</script>


<style scoped>

</style>
