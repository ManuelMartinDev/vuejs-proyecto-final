<template>
  <div v-if="course" class="bg-white min-h-screen">
    <div class="md:flex max-w-7xl md:mx-auto">
      <div>
        <div class="flex flex-col items-center md:items-start md:px-8">
          <img :src="course.image_url" class="w-[200px] h-[200px] md:hidden" />
          <h2
            class="capitalize font-bold text-center text-3xl md:text-6xl md:text-left"
          >
            {{ course.name }}
          </h2>
          <span class="text-yellow-400 text-xl mt-2">★★★★★</span>
          <a class="bg-blue-600 text-white p-4 px-7 rounded-md mt-4 md:hidden"
            >Start Watching</a
          >
        </div>
        <div
          class="flex flex-col gap-4 mt-10 text-md px-1 max-w-xl mx-auto md:mx-0 md:px-8"
          v-html="course.description"
        ></div>
        <div class="mt-10 px-2 grid gap-4">
          <p class="mb-4 font-bold text-center">Reviews</p>
          <ReviewCard />
          <ReviewCard />

          <ReviewCard />
        </div>
      </div>
      <div
        class="mt-8 px-2 md:flex md:flex-col md:items-center md:gap-5 md:w-full"
      >
        <img
          :src="course.image_url"
          class="w-[200px] h-[200px] min-w-[200px] hidden md:block md:w-2/4 md:h-fit"
        />
        <a
          class="bg-blue-600 text-white p-4 px-7 rounded-md block max-w-[159.59px] mx-auto"
          >Start Watching</a
        >
        <h2 class="text-2xl font-bold mb-5 mt-10 md:mb-0">Course Content</h2>
        <CourseContentList :classes="course.class" />
      </div>
    </div>
  </div>
</template>

<script setup>
import ReviewCard from "../components/ReviewCard/ReviewCard.vue";
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import { useRoute } from "vue-router";
import supabase from "../db/client.js";
import { ref } from "vue";
import { marked } from "marked";
const route = useRoute();

const Id = route.params.id;

const course = ref();

async function getCourse() {
  const response = await supabase
    .from("course")
    .select("*, class(*)")
    .eq("id", Id)
    .single();
  response.data.description = marked.parse(response.data.description);
  course.value = response.data;
  console.log(response.data);
  const { data, error } = await supabase.storage
    .from("video-class")
    .createSignedUrl(`${response.data.id}/1.mp4`, 60);

  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}

getCourse();
</script>
