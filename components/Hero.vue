<script lang="ts" setup></script>

<template>
  <section class="max-w-5xl mx-auto w-full h-screen lg:h-[80vh] font-sans">
    <div class="flex flex-col wrap text-center gap-8 lg:gap-20">
      <h3
        class="text-3xl md:text-2xl font-code md:text-left text-zinc-600 dark:text-zinc-400"
      >
        Hello World
      </h3>
      <h1 class="text-7xl font-sans font-black text-center">
        I'm
        <GradientText>Peter Kudeláš</GradientText>
      </h1>
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
  <p class="text-center">scroll down to learn more</p>
</template>

<style scoped></style>
