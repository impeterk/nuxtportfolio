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

const ogImageOptions = {
  title: "Peter Kudelas",
  description: "Full Stack Web Developer",
  component: "Example",
};
// a. Use the Composition API
defineOgImage(ogImageOptions);
</script>

<template>
  <OgImage v-bind="ogImageOptions" />
  <Hero />
  <Projects />
</template>

<style scoped></style>
