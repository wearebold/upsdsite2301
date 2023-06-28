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
              Contact Us
            </h1>
          </div>
        </header>
        <section
          class="grid grid-cols-1 l-grid-line l-grid-line--t md:grid-cols-12 | relative bg-gray-100 gap-px pt-px px-px"
        >
          <div class="hidden md:block md:col-span-2 bg-white">
          </div>
          <div
            class="md:col-span-10 bg-white p-4"
            style="padding: var(--space-l-xl)"
          >
           <ContactForm />
          </div>
        </section>
      </article>
    </main>
  </template>
  <style scoped></style>
  