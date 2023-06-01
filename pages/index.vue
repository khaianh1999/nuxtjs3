<template>
  <NuxtLayout :name="layout">
    <!-- <HomePageJumbotron /> -->
    <HomePageSlideShow />
    <HomePageFlashSale />
  </NuxtLayout>
</template>
<script setup>
const layout = "main";
const foo = useFoo();
const foo1 = useFoo1();
console.log('foo', foo);
console.log('foo1', foo1);
definePageMeta({
   middleware: ["auth"]
})
</script>
