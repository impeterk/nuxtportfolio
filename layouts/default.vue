<script lang="ts" setup></script>

<template>
  <div
    class="text-slate-800 dark:text-zinc-300 max-w-7xl layout mx-auto min-h-screen"
  >
    <Header />
    <main>
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
