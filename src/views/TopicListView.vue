<template>
  <div class="bg-white min-h-screen pt-10">
    <div
      v-if="paths"
      style="grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr))"
      class="grid gap-4 max-w-[1185px] mx-auto"
    >
      <TopicCard
        v-for="path in paths"
        :name="path.name"
        :image_url="path.image_url"
      />
    </div>
  </div>
</template>

<script setup>
import TopicCard from "../components/TopicCard/TopicCard.vue";
import supabase from "../db/client.js";
import { ref } from "vue";
const paths = ref();

async function getPaths() {
  const response = await supabase.from("path").select();
  const { data } = response;
  paths.value = data;
  console.log(data);
}

getPaths();
</script>
