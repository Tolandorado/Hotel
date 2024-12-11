<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
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
    console.log(name.value)
  } catch (error) {
    throw error
  }
}

</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Username:</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>

      <button type="submit">Submit</button>
    </form>

    <span>{{ name }}</span>
    <br />
    <span>{{ password }}</span>

    <div v-if="error">{{ error }}</div>
    <div v-if="success">Form submitted successfully!</div>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input {
  margin-bottom: 10px;
}

button {
  margin-top: 10px;
  width: 5rem;
}
</style>
