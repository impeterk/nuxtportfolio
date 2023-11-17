<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <div class="text-3xl flex gap-2 dark:text-zinc-600">
    <Icon
      class="cursor-pointer"
      name="ph:sun"
      @click="$colorMode.preference = 'light'"
      :class="{ 'text-amber-600': $colorMode.preference === 'light' }"
    />
    <Icon
      class="cursor-pointer"
      name="ph:moon"
      @click="$colorMode.preference = 'dark'"
      :class="{ 'text-sky-600': $colorMode.preference === 'dark' }"
    />
    <Icon
      class="cursor-pointer"
      name="ph:monitor"
      @click="$colorMode.preference = 'system'"
      :class="{
        'text-teal-500': $colorMode.preference === 'system',
      }"
    />
  </div>
</template>

<style scoped></style>
