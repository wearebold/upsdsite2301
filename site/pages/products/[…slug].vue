<!-- ./pages/products/[…slug.vue] -->

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent('products').where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent('products').only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);

  return {
    article: await article,
    models: await article.models,
    surround: await surround,    
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
useHead({
  title: data.value.article.title,
  meta: [
    { name: "description", content: data.value.article.description },
    {
      hid: "og:image",
      property: "og:image",
      content: `https://site.com/${data.value.article.images[0]}`,
    },
  ],
});
</script>
<template>
  <main id="main" class="article-main">
    <article>
      <header v-if="data.article" class="article-header">    
        <h1 class="heading">{{ data.article.title }}</h1>        
        <ul class="article-tags">
          <li class="tag !py-0.5" v-for="(tag, n) in data.article.category" :key="n">{{ tag }}</li>
        </ul>  
      </header>
  
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <section class="prose" aria-label="Description">
          <p class="supporting">{{ data.article.description }}</p>
        <h2>Key Features:</h2>
          <ul class="list-disc">            
              <li class="!py-0.5" v-for="(tag, n) in data.article.highlights" :key="n">{{ tag }}</li>
          </ul>
        </section>      
        <section aria-label="Gallery">
        <div class="relative w-full flex items-center gap-6 snap-x snap-mandatory overflow-x-auto pb-14 max-w-md overflow-hidden">
          <div class="snap-center shrink-0 max-w-md mx-auto" v-for="(img, n) in data.article.images" :key="n">
            <nuxt-img :src="`/img/products/${img}`" sizes="sm:100vw md:50vw lg:400px" :alt="data.article.title" class="" />
          </div>
        </div>
      </section>
      </div>      

      <section class="prose" aria-label="Characteristics">
        <h2>Characteristics</h2>
        <p>text here</p>
      </section>

      <section class="prose" aria-label="Technical Specifications">
      <h2>Technical Specifications</h2>
      <ModelSelector :models="data.article.models"></ModelSelector>
      </section>

      <section aria-label="Downloads">

      </section>

      <!-- PrevNext Component -->
      <PrevNext :prev="prev" :next="next" />

    </article>
  </main>
</template>

<style scoped>
.article-main {
  @apply p-4 max-w-5xl m-auto;
}

.article-header {
  @apply p-4 pb-12;
}

.article-header .heading {
  @apply font-extrabold text-5xl;
}

.article-header .supporting {
  @apply font-medium text-lg;
}

.article-section {
  @apply grid grid-cols-8;
}

.aside {
  @apply col-span-full md:col-span-2 row-start-1 w-full pt-14;
}

.aside .toc {
  @apply sticky top-20;
}

.article {
  @apply col-span-full md:col-span-6 md:col-start-1 md:row-start-1 prose w-full p-4 max-w-3xl m-auto;
}
</style>