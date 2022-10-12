<template>
  <div>
    <ol class="grid pl-4 md:pl-0">
      <div v-for="courseClass of classes" class="flex gap-2 p-4">
        <span>{{ courseClass.id }}</span>
        <li class="font-bold capitalize">
          {{ courseClass.name }}
        </li>
      </div>
    </ol>
  </div>
</template>

<script setup>
defineProps(["classes"]);
</script>
