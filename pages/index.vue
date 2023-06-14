<template>
  <!-- <NuxtLayout :name="layout"> -->
    <ClientOnly>
    <HomePageJumbotron />
    </ClientOnly>
    <HomePageSlideShow />
    <HomePageFlashSale />
    <div>
      page : {{ page }}
    </div>
  <!-- </NuxtLayout> -->
</template>
<script setup>

import { onMounted } from "vue";
const app = useNuxtApp();
const page = ref(1)
const { data, pending, error, refresh } = await useAsyncData(
  'listuser',
  async () => await app.$api.getListUser()
)
console.log('data', data);
onMounted(async () => {
  console.log("$api: ", app);
  const res = await app.$api.getListUser();
  console.log('respon', res);
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
