<template>
  <div>
    <AppHeader />
    <div class="flex flex-nowrap gap-6">
        <div>
            <ClientOnly>
            <Sidenav />
            </ClientOnly>
        </div>
        <div class="w-full">
            <slot />
        </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import "tw-elements/dist/css/tw-elements.min.css";
</script>
