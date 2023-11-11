<script lang="ts" setup></script>

<template>
  <div
    class="p-4 flex border-t border-zinc-400 dark:border-zinc-800 font-mono items-center relative"
  >
    <div class="flex gap-3 mx-auto">
      <p>Peter Kudelas &copy {{ new Date().getFullYear() }} | created with</p>
      <Icon name="logos:nuxt-icon" class="text-2xl" />
      <Icon name="logos:tailwindcss-icon" class="text-2xl" />
    </div>
    <ThemeSwitcher class="absolute right-10" />
  </div>
</template>

<style scoped></style>
