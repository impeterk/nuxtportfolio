<script lang="ts" setup>
const { data } = await useFetch("/api/test", {
  method: "post",
  body: {
    test: "fesak",
  },
});
console.log(data);
</script>

<template>
  <div class="bg-slate-300 dark:bg-slate-700 max-w-7xl mx-auto">
    {{ data }}
    <RouterLink to="/contact">contact </RouterLink>
    <NuxtImg
      format="avif"
      src="/_Peter kudelas posiela fotku.jpg"
      placeholder
      width="150"
      height="150"
    />
  </div>
</template>

<style scoped></style>
