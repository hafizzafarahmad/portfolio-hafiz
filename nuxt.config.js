export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Hafiz Zafar Ahmad",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/apple-icon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/vendors/themify-icons/css/themify-icons.css",
    "~/assets/css/steller.css",
    "~/assets/css/custom.css",
    // "~/assets/scss/steller.scss",
    {
      src: "~/assets/scss/steller.scss",
      lang: "scss",
    },
    /* Import Simple Line Icons Set */
    "~/node_modules/bootstrap-vue/dist/bootstrap-vue.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
    /* Import Core SCSS */
  ],

  devServerHandlers: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/fontawesome.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
