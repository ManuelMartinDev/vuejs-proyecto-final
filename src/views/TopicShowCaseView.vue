<template>
  <div class="bg-white flex flex-col items-center">
    <div class="w-full max-w-5xl">
      <div class="px-4 mt-4 bg-white py-4 mb-5">
        <div v-if="path" class="max-w-[800px]">
          <h1 class="text-8xl font-bold">{{ path.name }}</h1>
          <div class="my-4 text-md [&>p]:my-4" v-html="path.description"></div>
        </div>
      </div>
    </div>
    <div class="bg-gray-100 w-full flex flex-col items-center">
      <div class="px-4 py-4 w-full max-w-5xl" v-if="path">
        <CourseGrid :courses="path.course" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseGrid from "../components/CourseCard/CourseGrid.vue";
import { useRoute } from "vue-router";
import supabase from "../db/client.js";
import { ref } from "vue";
import { marked } from "marked";
const route = useRoute();

const Id = route.params.id;

const path = ref();

async function getTopic() {
  const topic = await supabase
    .from("path")
    .select("*,course(*)")
    .eq("id", Id)
    .single();
  const parsedDescription = marked.parse(topic.data.description);
  topic.data.description = parsedDescription;
  path.value = topic.data;
  console.log(topic);
}

getTopic();
</script>
