<!-- ./components/content/DetailsSummary.vue -->

<script>
// define props in <script>
// const props = defineProps(["type"]);
export default {
  data() {
    return {
      isOpen: false,
      maxHeight: '0px',
    };
  },
  methods: {
    onToggle(event) {
      this.isOpen = event.target.open;
      this.maxHeight = this.isOpen ? '500px' : '0px';
    },
  },
};
</script>

  <!-- Access `type` prop in Dynamic class  -->
<template>
  <details @toggle="onToggle" class="details">
    <summary class="summary">
      <ContentSlot :use="$slots.summary" unwrap="p"></ContentSlot>
    </summary>
    <div class="content" :style="{ 'max-height': maxHeight }">
        <ContentSlot :use="$slots.details"></ContentSlot>
    </div>
  </details>
</template>

<style scoped>
.details {
  position: relative;
}
.summary {
  cursor: pointer;
}
.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}
</style>