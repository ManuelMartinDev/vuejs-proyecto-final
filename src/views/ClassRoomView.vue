<template>
  <div>
    <div class="lg:flex">
      <!--This will be replaced by a real video player -->
      <div
        v-if="videoUrl"
        class="border-2 border-red-600 h-80 flex items-center justify-center w-full"
      >
        <video-player
          class="w-full h-full"
          :src="videoUrl"
          poster="/your-path/poster.jpg"
          controls
          :loop="true"
          :volume="0.6"
        />
      </div>
      <!---->
      <div class="mt-6 pl-4 w-full">
        <p class="font-bold text-lg">Lessons</p>
        <CourseContentList />
      </div>
    </div>
    <div class="pl-4 mt-6">
      <p class="font-bold text-lg">Comments</p>
      <ClassCommentList />
    </div>
  </div>
</template>

<script setup>
import CourseContentList from "../components/CourseContentList/CourseContentList.vue";
import ClassCommentList from "../components/ClassComment/ClassCommentList.vue";
import supabase from "../db/client.js";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const courseId = route.params.id;
const videoUrl = ref();
async function getClass() {
  const response = await supabase.from("class").select("*").eq("id", courseId);
  const { data, error } = await supabase.storage
    .from("video-class")
    .createSignedUrl(`${courseId}/${response.data[0].id}.mp4`, 60);

  if (error) {
    console.log(error);
  } else {
    videoUrl.value = data.signedUrl;
  }
}

getClass();
</script>
