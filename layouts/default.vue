<script lang="ts" setup>
const route = useRoute();
import { env } from "@/config";
useHead({
  link: [
    {
      rel: "canonical",
      href: env + route.path,
    },
  ],
});
</script>

<template>
  <div
    class="text-slate-800 dark:text-zinc-300 max-w-7xl layout mx-auto px-8 xl:px-0"
  >
    <Header />
    <main class="flex flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="postcss">
body,
html {
  @apply h-full m-0 p-0 box-border;
}

body {
  @apply text-base-content;
}

body::before {
  @apply bg-light dark:bg-dark content-[''] w-full h-full fixed opacity-90 z-[-1];
}

.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
