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
    class="text-slate-800 dark:text-zinc-300 max-w-7xl layout mx-auto min-h-screen"
  >
    <Header />
    <main class="flex flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-light dark:bg-dark px-8 xl:px-0;
}
.layout {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
