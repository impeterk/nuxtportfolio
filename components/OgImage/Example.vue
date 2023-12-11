<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: String,
  description: String,
});
</script>

<template>
  <div
    class="w-full h-full flex justify-center align-center items-center"
    style="
      background-image: radial-gradient(
        circle at 50% -250%,
        #374151,
        #111827,
        #000
      );
    "
  >
    <div
      style="
        color: transparent;
        background-clip: text;
        background-image: linear-gradient(
          to bottom right,
          #870160,
          #ac255e,
          #ca485c,
          #e16b5c,
          #f39060,
          #ffb56b
        );
      "
    >
      <h1 style="font-size: 120px; text-align: center">{{ title }} 💻</h1>
      <h2 style="font-size: 70px; margin: 0px auto; width: 100%">
        {{ description }}
      </h2>
    </div>
  </div>
</template>
