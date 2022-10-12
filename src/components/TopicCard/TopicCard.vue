<template>
  <a>
    <div class="h-52 shadow-md rounded-md grid grid-cols-2">
      <div class="flex items-center justify-center">
        <p class="font-bold text-2xl uppercase">{{ name }}</p>
      </div>
      <img class="h-full object-cover" :src="image_url" />
    </div>
  </a>
</template>

<script setup>
defineProps(["name", "image_url"]);
</script>
