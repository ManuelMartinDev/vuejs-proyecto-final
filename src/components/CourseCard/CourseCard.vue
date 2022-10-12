<template>
  <router-link class="w-full" :to="`/course/${course.id}`">
    <div
      class="bg-white shadow-md h-[183px] w-full flex items-center px-2 justify-around rounded-md max-w-[412px]"
    >
      <img :src="course.image_url" class="w-[100px] h-[100px]" />
      <div class="h-full flex flex-col justify-center">
        <p class="text-sm">{{ course.name }}</p>
        <p class="capitalize text-md max-w-[160px] font-bold">
          {{ course.description }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps(["course"]);
</script>
