<script lang="ts" setup></script>

<template>
  <section
    class="h-screen md:h-[40vh] max-w-5xl mx-auto w-full py-12 font-inter"
  >
    <div class="flex flex-col wrap text-center gap-4">
      <h2
        class="text-3xl font-code md:text-left text-zinc-600 dark:text-zinc-400"
      >
        Hello World
      </h2>
      <h2 class="text-7xl font-inter font-black text-center">
        I'm
        <GradientText>Peter Kudelas</GradientText>
      </h2>
      <h2 class="text-5xl mt-4 font-code font-extrabold md:text-end">
        I
        <span class="text-zinc-600 dark:text-zinc-400">{{'<code />'}}</span>
        web apps.
      </h2>
      <p class="font-semibold mt-8 leading-7 md:text-justify text-2xl">
        I am
        <span><GradientText>full-stack web developer</GradientText></span>
        creating functional web applications using latest web technologies.
      </p>
    </div>
  </section>
</template>

<style scoped></style>
