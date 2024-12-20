<template>
  <MyHeader />
  <MyHorizontLine />
  <main>
    <NuxtPage />
  </main>
  <MyHorizontLine />
  <MyFooter />
</template>

<script lang="ts" setup>
import MyHorizontLine from "~/components/MyHorizontLine.vue";
</script>

<style lang="scss" scoped>
main {
  min-height: calc(100dvh - 136px);
}
</style>
