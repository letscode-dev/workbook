<script setup lang="ts">
/**
 * Кастомный layout по документации VitePress:
 * https://vitepress.dev/guide/extending-default-theme#layout-slots
 * Override the Layout with a wrapper component that injects the slots.
 */
import DefaultTheme from "vitepress/theme";

const { Layout: DefaultLayout } = DefaultTheme;
</script>

<template>
  <DefaultLayout>
    <!-- При необходимости можно добавить слоты, например:
    <template #nav-bar-content-before> ... </template>
    <template #sidebar-nav-before> ... </template>
    -->
  </DefaultLayout>
</template>
