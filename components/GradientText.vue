<script lang="ts" setup>
const styles = {
  teal: "from-teal-600",
  indigo: "to-indigo-600",
  cyan: "from-cyan-600",
  fuchsia: "to-fuchsia-600",
};

withDefaults(
  defineProps<{
    from?: keyof typeof styles;
    to?: keyof typeof styles;
  }>(),
  {
    from: "teal",
    to: "indigo",
  }
);
</script>

<template>
  <span
    :class="`text-transparent bg-clip-text bg-gradient-to-r ${styles[from]} ${styles[to]}`"
  >
    <slot />
  </span>
</template>

<style scoped lang="postcss"></style>
