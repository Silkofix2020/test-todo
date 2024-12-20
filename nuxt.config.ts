// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/main.scss"],
  nitro: {
    preset: "node-server",
    output: {
      serverDir: ".output/server",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/colors.scss" as *;',
        },
      },
    },
  },
});
