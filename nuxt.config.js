module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ href: "https://fonts.googleapis.com/css?family=Istok+Web&display=swap", rel: "stylesheet" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
<<<<<<< HEAD
  css: [

  ],
  
=======
  css: [],

>>>>>>> dev
  /*
   ** Plugins to load before mounting the App
   */

  plugins: ["~/plugins/i18n.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [

  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    '@nuxtjs/style-resources',
    [
      'storyblok-nuxt',
      {
        accessToken: 'i9cQAaQmCZtDA86KVsVgbQtt',
        cacheProvider: 'memory'
      }
    ]
  ],
  styleResources: {
    scss: [
      'assets/scss/variables.scss',
      'assets/scss/reset.scss',
      'assets/scss/mixins.scss'

    ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {

  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
  },
  server: {
    port: 8000, // default: 3000     
    host: '192.168.0.10', // default: localhost   
  },   // other configs 

};
