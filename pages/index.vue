<template>
  <!-- <NuxtLayout :name="layout"> -->
    <ClientOnly>
    <HomePageJumbotron />
    </ClientOnly>
    <HomePageSlideShow />
    <HomePageFlashSale />
  <!-- </NuxtLayout> -->
</template>
<script setup>

import { onMounted } from "vue";
const app = useNuxtApp();
onMounted(() => {
  console.log("$api: ", app);
});
// const layout = "main";
const foo = useFoo();
const foo1 = useFoo1();
console.log('foo', foo);
console.log('foo1', foo1);
definePageMeta({
  layout: "main",
  middleware: ["auth"]
})
</script>
