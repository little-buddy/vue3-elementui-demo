<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 2000)
</script>

<template>
  <div v-if="loading" v-loading="loading" h-full w-full bg-pink />
  <div v-if="!loading">
    Test
  </div>
</template>
