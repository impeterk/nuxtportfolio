<script lang="ts" setup></script>

<template>
  <div
    class="py-4 gap-2 flex-col md:flex-row flex border-t border-zinc-400 dark:border-zinc-800 font-mono md:items-center lg:justify-center relative mt-10"
  >
    <p>Peter Kudelas &copy {{ new Date().getFullYear() }} |</p>
    <div class="space-x-3">
      <span>created with</span>
      <a
        href="http://nuxt.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxtjs link"
      >
        <Icon name="logos:nuxt-icon" class="text-2xl"
      /></a>
      <a
        href="http://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="tailwind CSS link"
      >
        <Icon name="devicon:tailwindcss" class="text-2xl"
      /></a>
    </div>
    <ClientOnly>
      <ThemeSwitcher
        class="absolute right-0 md:right-10 max-md:translate-y-1/2"
      />
    </ClientOnly>
  </div>
</template>

<style scoped></style>
