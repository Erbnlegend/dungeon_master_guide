<script setup lang="ts">
import axios from 'axios'

const getMonsters = async () => {
  try {
    const response = await axios.post('http://localhost:80/api/updatemonsters')
    console.log(response)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <main>
    <button @click="getMonsters">Get Monsters</button>
  </main>
</template>
