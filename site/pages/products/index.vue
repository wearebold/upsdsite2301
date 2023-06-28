<!-- ./pages/products/index.vue -->

<script setup>
import { ref, computed, onMounted, watch } from "vue";

// Meta data
definePageMeta({
  key: (route) => route.fullPath,
});

// Filter state
const selectedMinPower = ref(0);
const selectedMaxPower = ref(0);
const selectedCategories = ref([]);
const selectedSubCategories = ref([]);

// Fetch all products
const articles = ref([]);

// Max Power range
const maxPowerRange = computed(() => {
  return articles.value.reduce((max, product) => {
    const productMaxPower =
      product.powerRange.unit === "kVA"
        ? product.powerRange.to * 1000
        : product.powerRange.to;
    return Math.max(max, productMaxPower);
  }, 0);
});

// Min Power range
const minPowerRange = computed(() => {
  return articles.value.reduce((min, product) => {
    const productMinPower =
      product.powerRange.unit === "kVA"
        ? product.powerRange.from * 1000
        : product.powerRange.from;
    return Math.min(min, productMinPower);
  }, Infinity);
});

onMounted(async () => {
  // Fetch articles on component mount.
  articles.value = await queryContent("products").find();
  // Set the default value of selectedMaxPower to maxPowerRange
  selectedMaxPower.value = maxPowerRange.value;
  selectedMinPower.value = minPowerRange.value;

  console.log(articles.value);
});

// Watch for changes in articles and update the computed properties
watch(articles, () => {
  selectedMaxPower.value = maxPowerRange.value;
  selectedMinPower.value = minPowerRange.value;
});

// Watch for changes in selectedMinPower and update selectedMaxPower accordingly
watch(selectedMinPower, () => {
  selectedMaxPower.value = Math.max(
    selectedMaxPower.value,
    selectedMinPower.value
  );
});

// Watch for changes in selectedMaxPower and update selectedMinPower accordingly
watch(selectedMaxPower, () => {
  selectedMinPower.value = Math.min(
    selectedMinPower.value,
    selectedMaxPower.value
  );
});

// Filtered products
const filteredProducts = computed(() => {
  return articles.value.filter((product) => {
    // Convert power range to a common unit (e.g., VA)
    let productMinPower = product.powerRange.from;
    let productMaxPower = product.powerRange.to;
    if (product.powerRange.unit === "kVA") {
      productMinPower *= 1000;
      productMaxPower *= 1000;
    }

    // Check if product's power range falls within the selected range
    const withinPowerRange =
      productMinPower >= selectedMinPower.value &&
      productMaxPower <= selectedMaxPower.value;

    const inSelectedCategory =
      selectedCategories.value.length === 0 ||
      product.category.some((cat) => selectedCategories.value.includes(cat));

    const inSelectedSubCategory =
      selectedSubCategories.value.length === 0 ||
      selectedSubCategories.value.includes(product.subCategory);

    return withinPowerRange && inSelectedCategory && inSelectedSubCategory;
  });
});

// Categories
const categories = computed(() => {
  const allCategories = articles.value.flatMap((article) => article.category);
  return [...new Set(allCategories)];
});

// Subcategories
const subCategories = computed(() => {
  const allSubCategories = articles.value.flatMap(
    (article) => article.subCategory || []
  );
  return [...new Set(allSubCategories)];
});

// set meta for page
useHead({
  title: "All products",
  meta: [
    { name: "description", content: "Here's a list of all my great products" },
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
          <h1 class="text-h1 font-medium leading-tight tracking-wide">
            Products
          </h1>
        </div>
      </header>
      <section
        class="grid grid-cols-1 l-grid-line l-grid-line--t lg:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px"
      >
        <aside class="lg:col-span-2 bg-white p-4">
          <!-- <Category /> -->
          <h2 class="text-h5 font-bold mb-4">Filters</h2>

          <h3 class="text-h6 font-bold mb-4">Power Range</h3>
          <label class="block mb-6">
            <span class="block">Min Power (VA):</span>
            <input
              type="range"
              :min="minPowerRange"
              :max="maxPowerRange"
              v-model="selectedMinPower"
            />
            <span class="block">{{ selectedMinPower }} VA</span>
          </label>
          <label class="block mb-6">
            <span class="block">Max Power (VA):</span>
            <input
              type="range"
              :min="selectedMinPower"
              :max="maxPowerRange"
              v-model="selectedMaxPower"
            />
            <span class="block">{{ selectedMaxPower }} VA</span>
          </label>

          <h3 class="text-h6 font-bold mb-4">Categories</h3>
          <div class="mb-6">
            <label class="block" v-for="category in categories" :key="category">
              <input
                type="checkbox"
                :value="category"
                v-model="selectedCategories"
              />
              {{ category }}
            </label>
          </div>

          <h3 class="text-h6 font-bold mb-4">Subcategories</h3>
          <div class="mb-6">
            <label
              class="block"
              v-for="subCategory in subCategories"
              :key="subCategory"
            >
              <input
                type="checkbox"
                :value="subCategory"
                v-model="selectedSubCategories"
              />
              {{ subCategory }}
            </label>
          </div>
        </aside>
        <div class="lg:col-span-10 bg-white">
          <ul
            v-if="filteredProducts"
            class="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 | bg-gray-100 gap-x-px"
          >
            <li
              v-for="article in filteredProducts"
              :key="article._path"
              class="relative bg-white flex flex-col h-full"
            >
              <div class="p-6">
                <h2 class="text-h3 font-semibold mb-2">{{ article.title }}</h2>
                <dl class="flex flex-row gap-2">
                  <div class="flex flex-row items-center gap-2">
                    <dt class="sr-only">Power Range</dt>
                    <dd
                      class="c-pill | inline-flex px-2 py-1 bg-black text-white text-xs font-bold antialiased"
                    >
                      {{ article.powerRange.from }} –
                      {{ article.powerRange.to }} {{ article.powerRange.unit }}
                    </dd>
                  </div>
                  <div class="flex flex-row items-center gap-2">
                    <dt class="sr-only">Singlephase</dt>
                    <dd
                      class="c-pill | inline-flex px-2 py-1 bg-gray-700 text-white text-xs font-bold antialiased"
                    >
                      {{ article.singlePhase }}
                    </dd>
                  </div>
                </dl>
              </div>

              <!-- <ul class="article-tags">
                    <li class="tag !py-0.5" v-for="(tag, n) in article.category" :key="n">{{ tag }}</li>
                  </ul> -->

              <nuxt-img
                :src="`/img/products/${article.images[0]}`"
                sizes="sm:100vw md:50vw lg:400px"
                :alt="article.title"
                class="max-w-xs max-h-96 mx-auto pt-6 pb-10 object-contain"
              />
              <NuxtLink
                :to="article._path"
                class="c-btn c-btn--primary px-6 py-4 mt-auto | a11y-link | w-fit self-end inline-flex justify-content-between gap-4 no-underline"
                :aria-label="`View ${article.title}`"
                >View Product <span aria-hidden="true">↗</span></NuxtLink
              >
            </li>
          </ul>
        </div>
      </section>
    </article>
  </main>
</template>
