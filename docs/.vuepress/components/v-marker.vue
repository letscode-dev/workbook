<template>
  <span>
    <span v-if="marker === '+'">✅</span>
    <span v-if="marker === '-'">🅾️</span>
    <span v-if="marker === '*'">⭐️</span>
  </span>
</template>

<script>
export default {
  props: ["marker"],
};
</script>

<style scoped></style>
