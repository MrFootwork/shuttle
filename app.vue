<template>
  <div>
    <pre>{{ products }}</pre>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/products')
const products = computed(() => data.value ?? [])
console.log(products.value)
</script>
