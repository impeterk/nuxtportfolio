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
  <Projects />
  <AboutMe />
</template>

<style scoped></style>
