<template>
  <NuxtLayout :name="layout">
    <section>
      <p>This page will be displayed at the /about route.</p>
    </section>
  </NuxtLayout>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"]
})
const layout = "main";
</script>
