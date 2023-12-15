<script lang="ts" setup></script>

<template>
  <section>
    <div class="flex flex-col lg:grid lg:grid-cols-2 pt-20 justify-items-center gap-y-20 max-lg:items-center">
      <div class="col-span-2 flex w-full content-center items-center max-w-6xl gap-4 justify-center">
      <h2
        class="text-[2.5rem] sm:text-6xl font-sans font-extrabold md:font-medium relative shrink-0 w-max"
      >
        <GradientText
          from="from-accent"
          to="to-success"
          class="blur-2xl absolute left-0"
        >
          {{ "About Me" }}
        </GradientText>
        <GradientText from="from-accent" to="to-success">
          {{ "About Me" }}
        </GradientText>
      </h2>
    <div class="h-0.5 bg-gradient-to-r from-accent to-success w-full max-lg:hidden"></div>
  </div>
      <div class="col-start-1 col-span-1 sm:w-4/5 mx-auto"><p class="prose">I am a starting <strong>full stack developer</strong> from Slovakia. I am very passionate and dedicated to creating web applications that bring value to their users. <br><br>
      I love over source technologies. I like exploring new technologies in web dev space and building applications with various frameworks.
    </p>
  
    <h3 class="text-xl">To find what I am on right <NuxtLink to="/now" class="link">Now</NuxtLink></h3>
  </div>

      <div class="col-start-2 col-span-1">
        <span class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-2 translate-y-2 bg-accent group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-success "></span>
<span class="relative text-black group-hover:text-white"><NuxtImg src="/vue-mobile.webp" /></span>

</span>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
