<template>
  <DefaultLayout>
    <!-- <slot name="header"에 렌더링됨 -->
    <template v-slot:header>
      <header>
        <h1>Header</h1>
      </header>
    </template>
    <!-- <slot name="main"에 렌더링됨 -->
    <template v-slot:main>
      <main>
        <h1>Main</h1>
      </main>
    </template>
    <!-- <slot name="header"에 렌더링됨 -->
    <template v-slot:footer>
      <footer>
        <h1>Footer</h1>
      </footer>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './components/DefaultLayout.vue';

export default {
  components: {
    DefaultLayout,
  },
};
</script>
