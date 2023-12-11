<script lang="ts" setup>
withDefaults(
  defineProps<{
    from?: string;
    to?: string;
  }>(),
  {
    from: "from-info",
    to: "to-primary",
  }
);
</script>

<template>
  <span :class="`text-transparent bg-clip-text bg-gradient-to-r ${from} ${to}`">
    <slot />
  </span>
</template>

<style scoped lang="postcss"></style>
