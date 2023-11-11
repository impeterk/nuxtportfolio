<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <div
    class="bg-light dark:bg-dark min-h-screen px-8 text-slate-800 dark:text-slate-100"
  >
    <p class="p-4 pb-2">
      <select
        v-model="colorMode.preference"
        class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
    <slot />
  </div>
</template>

<style scoped></style>
