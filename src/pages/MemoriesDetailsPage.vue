<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"
  >
    <h2 v-if="!loadedMemory">Could not find a memory</h2>
    <MemoryOverview
      v-else
      :title="loadedMemory.title"
      :description="loadedMemory.description"
      :location="loadedMemory.location"
      :image="loadedMemory.image"
    />
  </base-layout>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useMemoryStore } from "../stores/memory";
import MemoryOverview from "../components/memories/memoryOverview.vue";
const { memory } = useMemoryStore();
const route = useRoute();
console.log(route.params.id);
const loadedMemory = ref();
loadedMemory.value = memory(route.params.id);
</script>
