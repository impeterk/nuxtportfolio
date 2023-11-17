<script lang="ts" setup>
import { env, meta } from "@/config";
useSeoMeta({
  title: meta.title,
  description: meta.description,
  ogType: "website",
  ogUrl: env,
  ogTitle: meta.title,
  ogDescription: meta.description,
});
</script>

<template>
  <Hero />
  <div class="code text-center my-auto md:space-y-6">
    <h3 class="text-3xl w-full">
      <GradientText from="cyan" to="fuchsia"
        >Website under construction</GradientText
      >
    </h3>
    <p class="font-light text-2xl">contact me @</p>
    <div class="text-7xl space-x-6">
      <a
        href="http://github.com/impeterk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="mdi:github" class="hover:text-emerald-600"
      /></a>
      <a
        href="http://linkedin.com/in/impeterk"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon name="mdi:linkedin" class="hover:text-sky-700"
      /></a>
    </div>
  </div>
</template>

<style scoped></style>
