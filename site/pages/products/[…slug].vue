<!-- ./pages/products/[…slug.vue] -->

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent("products").where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent("products")
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

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
          <h1 class=" font-medium leading-tight tracking-wide">
            <span class="text-h1">{{ data.article.title }}</span><br>
            <span class="text-h3" v-if="data.article.powerRange">{{ data.article.powerRange.from }} – {{ data.article.powerRange.to }} {{ data.article.powerRange.unit }}</span>
          </h1>
        </div>
      </header>
      <section
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px"
      >
        <div class="hidden md:block md:col-span-2 bg-white"></div>
        <div class="md:col-span-10 bg-white" style="padding: var(--space-xs)">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
            <section class="prose" aria-label="Description">
              <p class="text-h4 leading-tight">{{ data.article.description }}</p>
              <h2>Key Features:</h2>
              <ul class="list-disc">
                <li
                  class="!py-0.5"
                  v-for="(tag, n) in data.article.highlights"
                  :key="n"
                >
                  {{ tag }}
                </li>
              </ul>
            </section>
            <section aria-label="Gallery">
              <div
                class="relative w-full flex items-center gap-6 snap-x snap-mandatory overflow-x-auto pb-14 max-w-xl mx-auto overflow-hidden"
              >
                <div
                  class="snap-center shrink-0 max-w-xl mx-auto"
                  v-for="(img, n) in data.article.images"
                  :key="n"
                >
                  <nuxt-img
                    :src="`/img/products/${img}`"
                    sizes="sm:100vw md:50vw lg:600px"
                    :alt="data.article.title"
                    class=""
                  />
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

          <section aria-label="Downloads"></section>

          <!-- PrevNext Component -->
          <PrevNext :prev="prev" :next="next" />

          <!-- <ul class="article-tags">
          <li class="tag !py-0.5" v-for="(tag, n) in data.article.category" :key="n">{{ tag }}</li>
        </ul>   -->
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped></style>
