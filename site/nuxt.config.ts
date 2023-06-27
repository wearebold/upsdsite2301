// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify', 
    prerender: {
      crawlLinks: true
    }     
 }, 
  modules: ['@nuxt/image','@nuxt/content','@nuxtjs/tailwindcss'],
  image: {
    provider: 'netlify'
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'material-palenight',
        // Theme used if `html.dark`
        dark: 'github-dark',
      }
    },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5
      },
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  }
})
