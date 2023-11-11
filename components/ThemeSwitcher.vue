<script lang="ts" setup>
const colorMode = useColorMode();
</script>

<template>
  <ul class="text-2xl flex gap-2 dark:text-zinc-600">
    <Icon
      name="ph:sun"
      @click="$colorMode.preference = 'light'"
      :class="{ 'text-amber-600': $colorMode.preference == 'light' }"
    />
    <Icon
      name="ph:moon"
      @click="$colorMode.preference = 'dark'"
      :class="{ 'text-sky-600': $colorMode.preference == 'dark' }"
    />
    <Icon
      name="ph:monitor"
      @click="$colorMode.preference = 'system'"
      :class="{
        'text-teal-500': $colorMode.preference == 'system',
      }"
    />
  </ul>
</template>

<style scoped></style>
