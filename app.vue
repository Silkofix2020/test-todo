<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>
<script setup>
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.initialNotes();
});
</script>
