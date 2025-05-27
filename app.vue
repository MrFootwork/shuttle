<template>
  <div>
    <p>hi</p>
    <p>{{ products }}</p>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const products = await $fetch('/api/products')
console.log(products)
</script>
