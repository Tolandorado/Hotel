<script setup>
import { computed, watch } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const isAuth = computed(() => store.getters['user/isAuth'])

watch(
  () => store.getters['user/isAuth'],
  async(isAuth) => {
    if (isAuth) {
      await router.push({name: 'home'})
    }})

</script>

<template>
  <header>
    <div class="wrapper">
      <nav v-if="isAuth">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
* {
  margin: 1rem;
}
</style>
