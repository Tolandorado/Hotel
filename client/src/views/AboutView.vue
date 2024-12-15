<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const user = computed(() => store.getters['user/getUser'])
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Profile INFO</h2>
    
      <div><span>Your ID: </span> {{ user.id }}</div>
      <div><span>Name: </span> {{ user.name }}</div>
      <div><span>role:</span> {{ user.role }}</div>
  </div>
</template>

<style scoped>
div {
  border-radius: 0.4rem;
  background-color: rgb(158, 158, 158);
  margin-top: 1rem;
}
</style>
