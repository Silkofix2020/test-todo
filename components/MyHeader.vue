<template>
  <MyWrapper class="header__wrapper">
    <header class="header">
      <div class="header__logo">
        <NuxtLink class="header__link" to="/">
          <h2>Todolist App</h2>
        </NuxtLink>
      </div>
    </header>
  </MyWrapper>
</template>

<script lang="ts" setup>
import MyWrapper from "./MyWrapper.vue";
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 10px 0;
  &__logo {
    width: fit-content;
  }
  &__link {
    text-decoration: none;
    color: map-get($malibu, 900);
  }
}
</style>
