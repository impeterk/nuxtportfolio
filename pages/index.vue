<script lang="ts" setup>
useSeoMeta({
  title: "Peter Kudelas | Full stack web developer",
});
</script>

<template>
  <div>
    <Hero />
    <NuxtLink to="/contact">contact</NuxtLink>
    <NuxtImg
      format="avif"
      src="/image.jpg"
      placeholder
      width="300"
      height="300"
    />
  </div>
</template>

<style scoped></style>
