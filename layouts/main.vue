<template>
  <div>
    <ClientOnly>
        <AppHeader />
    </ClientOnly>
    <slot />
    <AppFooter />
  </div>
</template>

<script setup>
import "tw-elements/dist/css/tw-elements.min.css";
</script>
