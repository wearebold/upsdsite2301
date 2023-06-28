<!-- ./pages/blog/index.vue -->

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

// set meta for page
useHead({
  title: "All Case Studies",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>

<template>
  <main class="">
    <article class="l-container">
      <header
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px"
      >
        <div class="hidden md:block md:col-span-2 bg-white p-4"></div>
        <div
          class="md:col-span-10 bg-b-blue-500 text-white"
          style="padding: var(--space-xs)"
        >
          <h1 class="text-h1 font-medium leading-tight tracking-wide">
            Case Studies
          </h1>
        </div>
      </header>

      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/case-studies"
        :query="{
          only: ['title', 'description', '_path', 'img'],
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <div class="grid grid-cols-1 l-grid-line l-grid-line--t lg:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px">
            <div class="lg:col-span-2 bg-white p-4"></div>
            <div class="lg:col-span-10 bg-white">
              <ul class="grid grid-cols-1 sm:grid-cols-2 | bg-gray-100 gap-x-px">
                <li v-for="article in list" :key="article._path" class="relative bg-white flex flex-col h-full">

                  <div class="p-6">
                  <h2 class="text-h3 font-semibold mb-2">{{ article.title }}</h2>                  
                    <nuxt-img
                  :src="`/img/case-studies/${article.img}`"
                  sizes="sm:100vw lg:800px"
                  :alt="article.title"
                  class="pt-6 pb-10 object-contain"
                />
                <p>{{ article.description }}</p>
                  </div>

                <NuxtLink
                :to="article._path"
                class="c-btn c-btn--primary px-6 py-4 mt-auto | a11y-link | w-fit self-end inline-flex justify-content-between gap-4 no-underline"
                :aria-label="`View ${article.title}`"
                >View Case Study <span aria-hidden="true">↗</span></NuxtLink
              >
                 
                </li>
              </ul>
            </div>
          </div>          
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>

    </article>
  </main>
</template>
