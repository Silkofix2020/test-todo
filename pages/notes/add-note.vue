<template>
  <MyWrapper class="note-form">
    <form class="note-form__form" @submit.prevent="submitForm">
      <div class="note-form__field">
        <label class="note-form__label" for="title">Загловок</label>
        <input class="note-form__input" v-model="noteForm.title" id="title" placeholder="Введите заголовок" required />
      </div>

      <div class="note-form__todos">
        <h4 class="note-form__todos-title">Задачи</h4>
        <div class="note-form__todo" v-for="(todo, index) in noteForm.todos" :key="index">
          <input class="note-form__todo-input" v-model="todo.content" :placeholder="`Задача ${index + 1}`" required />
          <label class="note-form__todo-label">
            <input class="note-form__todo-checkbox" type="checkbox" v-model="todo.status" />
            Done
          </label>
          <MyButton class="button__delete note-form__todo-remove" type="button" @click="removeTodo(index)"
            >Удалить</MyButton
          >
        </div>
        <MyButton class="note-form__add-todo" type="button" @click="addTodo">Добавить задачу</MyButton>
      </div>
      <MyHorizontLine />
      <MyButton class="note-form__submit" type="submit">Сохранить заметку</MyButton>
    </form>
  </MyWrapper>
</template>

<script setup>
import MyWrapper from "~/components/MyWrapper.vue";
import MyHorizontLine from "~/components/MyHorizontLine.vue";
import MyButton from "~/components/MyButton.vue";
import { useNotesStore } from "~/stores/notes";

const notesStore = useNotesStore();

const noteForm = ref({
  id: null,
  title: "",
  todos: [{ id: 1, content: "", status: false }],
});

const addTodo = () => {
  const newId = noteForm.value.todos.length + 1;
  noteForm.value.todos.push({ id: newId, content: "", status: false });
};

const removeTodo = (index) => {
  noteForm.value.todos.splice(index, 1);
};

const submitForm = () => {
  if (noteForm.value.title.trim() && noteForm.value.todos.length > 0) {
    const newId = notesStore.notes.length > 0 ? Math.max(...notesStore.notes.map((note) => note.id)) + 1 : 1;

    notesStore.addNote({
      ...noteForm.value,
      id: newId,
    });

    resetForm();
    alert("Заметка сохранена!");
  }
};

const resetForm = () => {
  noteForm.value = {
    id: "",
    title: "",
    todos: [{ id: 1, content: "", status: false }],
  };
};
</script>

<style lang="scss" scoped>
.note-form {
  color: map-get($malibu, 950);
  &__form {
    max-width: 900px;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__field {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__input,
  &__todo-input {
    width: 100%;
    max-width: 400px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid map-get($malibu, 400);
    color: map-get($malibu, 950);

    &:focus-visible {
      outline: none;
    }
  }
  &__todos {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
}
</style>
