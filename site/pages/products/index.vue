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
  <main>
    <header class="page-heading">
      <div class="wrapper">
        <h1 class="text-5xl font-extrabold">All Products</h1>
        <p class="font-medium text-lg">Here's a list of all my great products</p>
      </div>
    </header>
    <section class="page-section">
      <Category />

      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/product"
        :query="{
          only: ['title', 'description', 'category', '_path', 'highlights', 'powerRange'],
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="article-list">
            {{ article }}
            <li v-for="article in list" :key="article._path" class="article-item">
              <NuxtLink :to="article._path">
                <div class="wrapper">
                  <div class="img-cont w-32 shrink-0">
                  </div>
                  <header>
                    <h2 class="text-2xl font-semibold">{{ article.title }}</h2>
                    <p>{{ article.powerRange.from }} – {{ article.powerRange.to }} {{ article.powerRange.unit }}</p>
                    <p>{{ article.description }}</p>
                    <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.category" :key="n">{{ tag }}</li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>