export default {
  target: 'static',
  head: {
    title: 'Blogwebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },
  css: [
  ],
  plugins: [

  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts',
    '@nuxtjs/vuetify',
 
  ],
  googleFonts: {
    families: {
      Lora: [700],
      Staatliches: [400],
      Galada: [400],
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/firebase'
  ],
  axios: {
    baseURL: '/',
  },
  firebase: {
    config: {
      apiKey: "AIzaSyCXd8U-Xy7HTHRAabnkO7uPf1F6gwtq9E0",
      authDomain: "educat-66f67.firebaseapp.com",
      databaseURL: "https://educat-66f67-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "educat-66f67",
      storageBucket: "educat-66f67.appspot.com",
      messagingSenderId: "1060493567780",
      appId: "1:1060493567780:web:563afdd33f30c59ada75b1",
      measurementId: "G-19D637RG6R"
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          createUserWithEmailAndPassword: 'createUserWithEmailAndPassword',
          getAuth: 'getAuth',
          subscribeManually: false
        },
        ssr: false, // default
      }
    }
 },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  vuetify: {
    theme: {
      dark: false,
    }
  },

  content: {},
  build: {
    postcss: {      
      plugins: {        
        tailwindcss: {},        
        autoprefixer: {},      
      },    
    },
  }
}
