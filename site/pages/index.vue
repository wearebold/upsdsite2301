<!-- ./pages/index.vue -->
<template>
  <main>
    <h2>Gird</h2>

    <div class="l-container">
      <div
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | bg-gray-100 gap-px pt-px px-px"
      >
        <div class="md:col-span-8 bg-white p-4">1</div>
        <div class="md:col-span-4 bg-white p-4">2</div>
      </div>
    </div>

    <div class="l-container">
      <div
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | bg-gray-100 gap-px pt-px px-px"
      >
        <div class="md:col-span-4 bg-white p-4">1</div>
        <div class="md:col-span-8 bg-white p-4">2</div>
      </div>
    </div>

    <div class="l-container">
      <div
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | bg-gray-100 gap-px pt-px px-px"
      >
        <div class="md:col-span-6 bg-white p-4">1</div>
        <div class="md:col-span-6 bg-white p-4">2</div>
      </div>
    </div>

    <div class="l-container">
      <div
        class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | bg-gray-100 gap-px pt-px px-px"
      >
        <div class="md:col-span-4 bg-white p-4">1</div>
        <div class="md:col-span-4 bg-white p-4">2</div>
        <div class="md:col-span-4 bg-white p-4">3</div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hero-section {
  @apply flex justify-center p-4 w-full h-screen bg-slate-50 text-slate-700;
}

.hero-section > .wrapper {
  @apply m-auto max-w-6xl;
}
</style>
