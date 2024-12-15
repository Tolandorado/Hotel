<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex';

const name = ref('')
const password = ref('')
const error = ref(null)
const success = ref(null)
const data = reactive({})

const store = useStore();

const submitForm = async () => {
  try {
    await store.dispatch('user/login', { name: name.value, password: password.value })
  } catch (error) {
    throw error
  }
}

</script>

<template>
  <div class="flex flex-col items-center justify-center h-full w-full">
    <form @submit.prevent="submitForm" class="bg-slate-300 w-min p-3 border rounded-md ">
      <div>
        <label for="name">Username:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit" class="mt-2 px-4 py-2 bg-yellow-500 rounded-md">Submit</button>
    </form>

    <span>{{ name }}</span>
    <br />
    <span>{{ password }}</span>

    <div v-if="error">{{ error }}</div>
    <div v-if="success">Form submitted successfully!</div>
  </div>
</template>

<style scoped>

</style>
