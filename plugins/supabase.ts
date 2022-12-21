export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.hooks.hook("app:mounted", () => {
    console.log("app mounted by plugins");
  });
});
