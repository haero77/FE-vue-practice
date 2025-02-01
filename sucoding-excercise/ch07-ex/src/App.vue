<template>
  <!--  <RefEx2Child ref="componentRef"></RefEx2Child>-->
  <!--  <ComputedEx1 ref="componentRef"></ComputedEx1>-->
  <!--  <MethodsEx1></MethodsEx1>-->
  <!--  <WatchEx1></WatchEx1>-->
  <!--  <WatchEffectEx1></WatchEffectEx1>-->
  <WatchPostEffectEx1></WatchPostEffectEx1>
</template>

<script setup>
import {ref} from 'vue'
import RefEx2Child from "@/components/RefEx2Child.vue";
import ComputedEx1 from "@/components/ComputedEx1.vue";
import MethodsEx1 from "@/components/MethodsEx1.vue";
import WatchEx1 from "@/components/WatchEx1.vue";
import WatchEffectEx1 from "@/components/WatchEffectEx1.vue";
import WatchPostEffectEx1 from "@/components/WatchPostEffectEx1.vue";
</script>

<style scoped>

</style>
