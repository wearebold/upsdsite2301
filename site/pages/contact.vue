<template>
    <main class="">
      <article class="l-container">
        <PageHeader headerText="Contact" subHeaderText=""></PageHeader>       
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
  