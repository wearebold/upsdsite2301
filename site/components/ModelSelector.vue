<template>
    <div>

      <label for="model-selector">Technical specifications of the model:</label>      
      <select v-model="selectedModel" @change="onModelChange" id="model-selector">
        <option v-for="model in models" :key="model.model" :value="model.model">
          {{ model.model }}
        </option>
      </select>
  
      <table v-if="selectedModelData" class="data-table" aria-live="polite" aria-atomic="true">
        <tr>
          <th>Name</th>
          <th>Property</th>
          <th>Value</th>
        </tr>
        <template v-for="(value, key) in selectedModelData">
          <template v-if="key !== 'model' && key !== 'value'">
            <tr v-if="typeof value === 'object'">
              <td :rowspan="Object.keys(value).length + 1" class="group-title">{{ convertToSentenceCase(key) }}</td>
            </tr>
            <tr v-if="typeof value === 'object'" v-for="(subValue, subKey) in value" :key="subKey">
              <td>{{ convertToSentenceCase(subKey) }}</td>
              <td>{{ subValue }}</td>
            </tr>
            <tr v-else>
              <td>{{ convertToSentenceCase(key) }}</td>
              <td>{{ value }}</td>
            </tr>
          </template>
        </template>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      models: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        selectedModel: null,
        selectedModelData: null
      };
    },
    created() {
      if (this.models && this.models.length > 0) {
        this.selectedModel = this.models[0].model;
        this.selectedModelData = this.models[0];
      }
    },
    methods: {
      onModelChange() {
        this.selectedModelData = this.models.find(
          model => model.model === this.selectedModel
        );
      },
      convertToSentenceCase(str) {
        return str
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (str) {
            return str.toUpperCase();
          });
      }
    }
  };
  </script>
  
  <style>
  .data-table {
    width: 100%;
    border-collapse: collapse;
  }
  .data-table th, .data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  .group-title {
    font-weight: bold;
    text-align: center;
  }
  </style>
  