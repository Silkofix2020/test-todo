<template>
  <MyWrapper class="footer__wrapper">
    <footer class="footer">
      <h2>(c) some text</h2>
    </footer>
  </MyWrapper>
</template>

<script lang="ts" setup>
import MyWrapper from "./MyWrapper.vue";
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: map-get($malibu, 900);
}
</style>
