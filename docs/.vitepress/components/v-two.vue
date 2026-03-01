<template>
  <div class="wrapper">
    <div class="column" :class="fix ? 'column-fix' : 'column-half'">
      <slot name="first">User Default1</slot>
    </div>
    <div class="column" :class="fix ? 'column-grow' : 'column-half'">
      <slot name="last">User Default2</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  fix?: boolean;
}

withDefaults(defineProps<Props>(), {
  fix: false,
});
</script>

<style scoped>
.wrapper {
  --border: 1px solid #e1e1e1;

  display: flex;
  margin: 10px 0px;
  border: var(--border);
}
.column {
  padding: 10px;
  border-right: var(--border);
}
.column:last-child {
  border-right: none;
}
.column-half {
  width: 50%;
}
.column-grow {
  width: calc(100% - 200px);
}
.column-fix {
  width: 200px;
}

@media screen and (max-width: 1070px) {
  .wrapper {
    flex-wrap: wrap;
  }
  .column-half {
    width: 100%;
  }
  .column-grow {
    width: 100%;
  }
  .column-fix {
    width: 100%;
  }
}
</style>
