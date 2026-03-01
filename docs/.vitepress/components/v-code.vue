<template>
  <span :class="theme">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
interface Props {
  theme: "text" | "light";
}

defineProps<Props>();
</script>

<style scoped>
.text,
.light {
  font-family: monospace;
  padding: 0 5px;
  border-radius: 3px;
  line-height: 1.4em;
  font-size: 14px;
}

.text {
  border: 1px solid;
  border-color: #dfe1bf;
  background-color: #f0f1e1;
  color: rgb(var(--color-orange));
}
.light {
  background-color: rgb(var(--color-white));
  color: rgb(var(--color-orange));
  box-shadow: 0.1px 0.1px 5px 1px rgba(var(--color-black), 0.15);
}
</style>
