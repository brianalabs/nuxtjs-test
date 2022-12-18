// import tailwindForms from "@tailwindcss/forms";
import { ENV } from "./env";

export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  runtimeConfig: {
    public: ENV,
  },
  // build: {
  //   transpile: ["@heroicons/vue"],
  // },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
  // TODO: https://github.com/nuxt-modules/tailwindcss/issues/565#issuecomment-1320573586
  // NOTE: There is some bug on `@nuxtjs/tailwindcss` package.
  // tailwindcss: {
  //   // @ts-ignore
  //   config: {
  //     plugins: [tailwindForms()],
  //   },
  // },
  supabase: {
    url: ENV.SUPABASE_URL,
    key: ENV.SUPABASE_KEY,
  },
});
