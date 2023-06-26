<!-- ./components/SiteHeader.vue -->

<template>
    <header class="site-header">
      <div class="wrapper">
        <NuxtLink to="/" class="no-underline">
          <figure class="site-logo">
            <h1>UPS Direct</h1>
          </figure>
        </NuxtLink>
  
        <nav class="site-nav">
          <ul class="links inline-flex gap-6">
            <li class="link">
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li class="link">
              <NuxtLink to="/services">Services</NuxtLink>
            </li>
            <li class="link">
              <NuxtLink to="/products">Products</NuxtLink>
            </li>
            <li class="link">
              <NuxtLink to="/customised-solutions">Customised Solutions</NuxtLink>
            </li>            
            <li class="link">
              <NuxtLink to="/blog">Case Studies</NuxtLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <style scoped>
  .site-header {
    @apply sticky top-0 w-full p-4 bg-slate-100 bg-opacity-40 border-b-2 border-white border-opacity-30 backdrop-blur-lg z-20;
  }
  
  .site-header > .wrapper {
    @apply flex items-center justify-between max-w-6xl m-auto;
  }
  
  .site-logo {
    @apply font-black text-lg;
  }
  </style>