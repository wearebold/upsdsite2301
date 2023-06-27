<!-- ./components/SiteHeader.vue -->

<template>
  <header class="site-header bg-white overflow-hidden">
    <div class="l-container">
      <div class="w-full grid grid-cols-1 l-grid-line l-grid-line--t l-grid-line--b md:grid-cols-12 | relative bg-gray-100 gap-px py-px px-px"> 
        <div
          class="md:flex md:col-span-2 bg-white p-4 justify-center items-center"
        >
        <NuxtLink to="/" class="no-underline flex">          
          <nuxt-img
            src="/img/svg/ups-direct_logo-light.svg"
            style="max-width: 160px"
            alt="UPS Direct Logo"
            class="flex-shrink-0 w-full aspect-[2/1]"
          />
        </NuxtLink>
        </div>
        
        
        <div class="md:col-span-10 bg-white p-4">
          <nav class="site-nav flex justify-center items-center h-full">
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
                <NuxtLink to="/customised-solutions"
                  >Customised Solutions</NuxtLink
                >
              </li>
              <li class="link">
                <NuxtLink to="/blog">Case Studies</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  @apply sticky top-0 w-full z-20;
}

.site-header > .l-container {
  @apply flex items-center justify-between m-auto;
}

.site-logo {
  @apply font-black text-lg;
}
</style>
