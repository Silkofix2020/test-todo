<template>
  <div class="todo-card">
    <h3 class="todo-card__title">Заметка {{ props.note.id }}: {{ props.note.title }}</h3>
    <div class="todo-details">
      <ul class="todo-card__list">
        <li
          v-for="(item, id) in note.todos.slice(0, 2)"
          :key="id"
          :class="['todo-card__item', { 'todo-card__item--done': item.status }]"
        >
          {{ item.content }}
        </li>
      </ul>
    </div>
    <div class="todo-actions">
      <NuxtLink class="todo-action__link" :to="`/notes/edit-${note.id}`">
        <MyButton class="todo-action__button"> Изменить </MyButton>
      </NuxtLink>
      <MyButton class="button__delete todo-action__button" @click="props.deleteNote(note.id)">Удалить</MyButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
  deleteNote: {
    type: Function,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.todo {
  &-card {
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 5px;
    background: map-get($malibu, 200);
    padding: 10px 5px;
    border-radius: 8px;

    &__title {
      grid-column: 1 / -1;
      color: map-get($malibu, 950);
    }
    &__list {
      list-style: none;
    }
    &__item {
      color: map-get($malibu, 900);
      &--done {
        text-decoration: line-through;
      }
    }
  }
  &-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }
  &-action {
    &__link {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
