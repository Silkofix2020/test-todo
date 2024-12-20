<template>
  <button :class="['button', props.class]">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>

<style lang="scss" scoped>
.button {
  background: map-get($malibu, 500);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: map-get($malibu, 600);
  }

  &__delete {
    background: map-get($carnation, 500);
    &:hover {
      background: map-get($carnation, 600);
    }
  }
}
</style>
