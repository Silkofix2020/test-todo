<template>
  <div :class="props.class">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
div {
  max-width: 1200px;
  width: calc(100% - 20px);
  margin: auto;
  display: flex;
  align-items: center;
}
</style>
