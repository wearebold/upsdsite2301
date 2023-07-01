<template>
  <header
    class="grid grid-cols-1 md:grid-cols-12 | relative bg-gray-100 gap-px px-px"
  >
    <div class="hidden md:flex md:col-span-2 bg-white p-4 relative">
      <div class="d-circles">
        <span class="d-circle d-circle__1"></span>
        <span class="d-circle d-circle__3"></span>
      </div>
    </div>
    <div
      class="md:col-span-10 bg-b-blue-500 text-white relative"
      style="padding: var(--space-xs)"
    >
      <div class="d-circles">
        <span class="d-circle d-circle__1"></span>
        <span class="d-circle d-circle__2"></span>
        <span class="d-circle d-circle__3"></span>
        <span class="d-circle d-circle__4"></span>
      </div>
      <h1 class="font-medium leading-tight tracking-wide">
        <span class="text-h1">{{ headerText }}</span><br />
        <span class="text-h3" v-if="subHeaderText">{{ subHeaderText }}</span>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: ''
    },
    subHeaderText: {
      type: String,
      default: ''
    }
  }
};
</script>

