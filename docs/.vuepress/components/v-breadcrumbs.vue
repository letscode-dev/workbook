<template>
  <span>
    <span v-for="(item, i) in items" :key="i">
      <span v-html="getTag(item)"></span>
      <span v-html="getSymbol()" v-if="i !== items.length - 1" />
    </span>
  </span>
</template>

<script>
export default {
  props: {
    items: Array,
    keys: Boolean,
  },
  methods: {
    getSymbol() {
      let symbol = "➝";

      if (this.keys) {
        symbol = "+";
      }

      return `&nbsp;${symbol}&nbsp;&nbsp;`;
    },
    getTag(item) {
      let className = "u-code-light";

      if (this.keys) {
        className = "u-code-text";
      }

      return `<span class="${className}">${item}</span>`;
    },
  },
};
</script>

<style scoped>
:deep(.u-code-text),
:deep(.u-code-light) {
  font-family: monospace;
  padding: 0 5px;
  border-radius: 3px;
  line-height: 1.4em;
  font-size: 14px;
}
:deep(.u-code-text) {
  border: 1px solid;
  border-color: #dfe1bf;
  background-color: #f0f1e1;
  color: rgb(var(--color-orange));
}
:deep(.u-code-light) {
  background-color: rgb(var(--color-white));
  color: rgb(var(--color-orange));
  box-shadow: 0.1px 0.1px 5px 1px rgba(var(--color-black), 0.15);
}
</style>
