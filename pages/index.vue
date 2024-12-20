<template>
  <MyWrapper class="notes__wrapper">
    <div class="notes__actions">
      <NuxtLink to="/notes/add-note"><MyButton>Добавить заметку</MyButton></NuxtLink>
    </div>
    <div class="notes__todos">
      <MyTodoCard v-for="note in notesStore.notes" :key="note.id" :note="note" :deleteNote="notesStore.removeNote" />
    </div>
  </MyWrapper>
</template>

<script setup>
import MyWrapper from "~/components/MyWrapper.vue";
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();
</script>

<style lang="scss" scoped>
.notes {
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  &__actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__todos {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
