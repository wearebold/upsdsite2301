// https://nuxt.com/docs/api/configuration/nuxt-config
import conf from './conf';


export default defineNuxtConfig({  
  devtools: { enabled: true },
  nitro: {
    preset: 'netlify', 
    prerender: {
      crawlLinks: true
    }     
 }, 
  pages: true,
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
