<!-- ./pages/products/index.vue -->

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// set meta for page
useHead({
  title: "All products",
  meta: [{ name: "description", content: "Here's a list of all my great products" }],
});
</script>
<template>
     <main class="">
      <article class="l-container">
        <header class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px">
          <div class="hidden md:block md:col-span-2 bg-white p-4">
          </div>
          <div class="md:col-span-10 bg-b-blue-500 text-white" style="padding: var(--space-xs);">
            <h1 class="text-h1 font-medium leading-tight tracking-wide">Products</h1>
          </div>
        </header>
        <section class="grid grid-cols-1 l-grid-line l-grid-line--t lg:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px">
          <aside class="lg:col-span-2 bg-white p-4">
            <!-- <Category /> -->
            Filters
          </aside>
          <div class="lg:col-span-10 bg-white">          

            <!-- Render list of all articles in ./content/blog using `path` -->
            <!-- Provide only defined fieldsin the `:query` prop -->
            <ContentList
              path="/product"
              :query="{
                only: ['title', 'description', 'category', '_path', 'highlights', 'powerRange', 'images', 'singlePhase' ],
                $sensitivity: 'base',
              }"
            >
              <!-- Default list slot -->
              <template v-slot="{ list }">
                <ul class="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 | bg-gray-100 gap-x-px">
                  <li v-for="article in list" :key="article._path" class="relative bg-white flex flex-col">
                    <div class="p-6">
                    <h2 class="text-h3 font-semibold mb-2">{{ article.title }}</h2>
                    <dl class="flex flex-row gap-2">
                    <div class="flex flex-row items-center gap-2">
                      <dt class="sr-only">Power Range</dt>
                      <dd class="c-pill | inline-flex px-2 py-1 bg-black text-white text-xs font-bold antialiased">{{ article.powerRange.from }} – {{ article.powerRange.to }} {{ article.powerRange.unit }}</dd>
                    </div>
                    <div class="flex flex-row items-center gap-2">
                      <dt class="sr-only">Singlephase</dt>
                      <dd class="c-pill | inline-flex px-2 py-1 bg-gray-700 text-white text-xs font-bold antialiased">{{ article.singlePhase }}</dd>
                    </div>
                  </dl>
                </div>

                  <!-- <ul class="article-tags">
                    <li class="tag !py-0.5" v-for="(tag, n) in article.category" :key="n">{{ tag }}</li>
                  </ul> -->

                    <nuxt-img :src="`/img/products/${article.images[0]}`" sizes="sm:100vw md:50vw lg:400px" :alt="article.title" class="max-w-xs mx-auto pt-6 pb-10" />
                    <NuxtLink :to="article._path" class="c-btn c-btn--primary px-6 py-4 | a11y-link | w-fit self-end inline-flex justify-content-between gap-4 no-underline" :aria-label="`View ${article.title}`">View Product <span aria-hidden="true">↗</span></NuxtLink>                      
                  </li>
                </ul>
              </template>

              <!-- Not found slot to display message when no content us is found -->
              <template #not-found>
                <p>No articles found.</p>
              </template>
            </ContentList>            

          </div>

        </section>

      </article>      
  </main>
</template>