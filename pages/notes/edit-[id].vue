<template>
  <MyWrapper class="note-form">
    <div class="note-form__actions">
      <MyButton class="note-form__submit" @click="cancelEdit">Отменить редактирование</MyButton>
      <MyButton class="button__delete note-form__submit" @click="deleteNote">Удалить заметку</MyButton>
    </div>
    <form class="note-form__form" @submit.prevent="submitEdit">
      <div class="note-form__field">
        <label class="note-form__label" for="title">Загловок</label>
        <input class="note-form__input" v-model="noteForm.title" id="title" placeholder="Введите заголовок" required />
      </div>

      <div class="note-form__todos">
        <h4 class="note-form__todos-title">Задачи</h4>
        <div
          :class="['note-form__todo', { 'note-form__todo--done': todo.status }]"
          v-for="(todo, index) in noteForm.todos"
          :key="index"
        >
          <input
            class="note-form__todo-input"
            v-model="todo.content"
            :placeholder="`Задача ${index + 1}`"
            :disabled="todo.status"
            required
          />
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
      <MyButton class="note-form__submit" type="submit">Сохранить изменения</MyButton>
    </form>
  </MyWrapper>
</template>

<script setup>
import { useNotesStore } from "~/stores/notes";

const router = useRouter();
const notesStore = useNotesStore();

const route = useRoute();
const params = Number(route.params.id);

const noteForm = ref({
  id: null,
  title: "",
  todos: [],
});

const addTodo = () => {
  const newId = noteForm.value.todos.length + 1;
  noteForm.value.todos.push({ id: newId, content: "", status: false });
};

const submitEdit = () => {
  notesStore.updateNote(noteForm.value.id, {
    id: noteForm.value.id,
    title: noteForm.value.title,
    todos: noteForm.value.todos,
  });
};

const cancelEdit = () => {
  const userConfirm = confirm("Внесенные изменения не сохранятся!");
  if (userConfirm) {
    router.push("/");
  }
};

const deleteNote = () => {
  notesStore.removeNote(noteForm.value.id);
  router.push("/");
};

onMounted(() => {
  const note = notesStore.notes.find((note) => note.id === params);
  if (note) {
    noteForm.value = JSON.parse(JSON.stringify(note));
  }
});
</script>

<style lang="scss" scoped>
.note-form {
  display: flex;
  flex-direction: column;
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
    &:disabled {
      background: map-get($malibu, 400);
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
    padding: 5px;
  }
  &__actions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
}
</style>
