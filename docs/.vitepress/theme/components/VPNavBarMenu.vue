<script lang="ts" setup>
/**
 * Кастомное меню навбара (fieldset + theme pills).
 * Подключается через vite.resolve.alias в config (Overriding Internal Components).
 */
import { useData } from "vitepress";
import { VPLink } from "vitepress/theme";

const { theme: themeConfig, page } = useData();
const nav = themeConfig.value?.nav ?? [];

type NavGroup = { text: string; items: { text: string; link: string; theme?: string }[] };
const groups = nav.filter((item): item is NavGroup => "items" in item && Array.isArray(item.items));

function normalizePath(p: string): string {
  return decodeURI(p)
    .replace(/[?#].*$/, "")
    .replace(/(?:(^|\/)index)?\.(?:md|html)$/, "$1")
    .replace(/\/$/, "") || "/";
}

function isActive(relativePath: string, link: string): boolean {
  const current = "/" + relativePath.replace(/\.md$/, "").replace(/\/index$/, "");
  const norm = normalizePath(link);
  return current === norm || (norm !== "/" && current.startsWith(norm + "/"));
}
</script>

<template>
  <nav
    v-if="groups.length"
    aria-labelledby="main-nav-aria-label"
    class="VPNavBarMenu custom-nav"
  >
    <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
    <fieldset v-for="(group, gKey) in groups" :key="gKey" class="fieldset">
      <legend class="legend">{{ group.text }}</legend>
      <div class="link-wrapper">
        <VPLink
          v-for="(item, key) in group.items"
          :key="key"
          :href="item.link"
          :class="['link', item.theme || 'theme-default']"
        >
          <span :class="{ 'route-link-active': isActive(page.relativePath, item.link) }">
            {{ item.text }}
          </span>
        </VPLink>
      </div>
    </fieldset>
  </nav>
</template>

<style scoped>
/* Только десктоп: кастомное меню (fieldset). На мобильном скрыто — используется стандартное меню в drawer. */
.VPNavBarMenu.custom-nav {
  display: none;
}

@media (min-width: 768px) {
  .VPNavBarMenu.custom-nav {
    display: flex;
  }
}

.custom-nav {
  flex-wrap: wrap;
  gap: 15px;
  align-items: flex-start;
}

.fieldset {
  margin: 0;
  padding: 10px;
  border: 1px solid var(--vp-c-divider, #dcdcdc);
  border-radius: 5px;
  background-color: var(--vp-c-bg-soft, #fff);
}

.legend {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-1, #2c3e50);
}

.link-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
}

.link {
  display: inline-block;
  padding: 5px 6px;
  line-height: 1;
  font-size: 14px;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 500;
  border-radius: 5px;
  transition: opacity 0.2s;
  cursor: pointer;
}
.link:hover {
  opacity: 0.85;
}
.link :deep(.route-link-active) {
  outline: 2px solid var(--vp-c-bg-soft, #fff);
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 4px;
  padding: 2px 4px;
}

/* Theme pills (из VuePress app-custom VPNavbar.vue) */
.link.theme-default {
  color: rgb(35, 44, 46);
  background-color: rgba(225, 225, 225, 0.3);
  border: 1px solid rgba(219, 219, 219, 0.9);
}
.link.theme-react {
  color: rgb(43, 116, 132);
  background-color: rgba(43, 216, 255, 0.3);
  border: 1px solid rgba(43, 216, 255, 0.9);
}
.link.theme-node {
  color: rgb(85, 103, 45);
  background-color: rgba(133, 190, 5, 0.3);
  border: 1px solid rgba(133, 190, 5, 0.9);
}
.link.theme-js {
  color: rgb(104, 95, 43);
  background-color: rgba(232, 212, 77, 0.3);
  border: 1px solid rgba(232, 212, 77, 0.9);
}
.link.theme-vue {
  color: rgb(34, 83, 61);
  background-color: rgba(62, 178, 127, 0.3);
  border: 1px solid rgba(62, 178, 127, 0.9);
}
.link.theme-html {
  color: rgb(195, 99, 58);
  background-color: rgba(208, 90, 39, 0.1);
  border: 1px solid rgba(222, 96, 42, 0.2);
}
.link.theme-primary {
  color: rgb(159, 159, 159);
  background-color: rgba(231, 234, 198, 0.4);
  border: 1px solid #e2e2e2;
}
.link.theme-secondary {
  color: rgb(173, 173, 173);
  background-color: #fff;
  border: 1px solid #ededed;
}
.link.theme-accent {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(0, 201, 167, 0.6);
  outline: 1px solid rgba(0, 201, 167, 0.6);
}
.link.theme-actual {
  color: rgb(100, 100, 100);
  background-color: #fff;
  border: 1px solid rgba(245, 224, 66, 1);
  outline: 1px solid rgba(245, 224, 66, 1);
}
.link.theme-tech {
  color: rgb(199, 90, 209);
  background-color: rgba(212, 15, 230, 0.1);
  border: 1px solid #e2e2e2;
}
.link.theme-theory {
  color: rgb(136, 136, 136);
  background-color: rgba(233, 233, 233, 0.3);
  border: 1px solid rgb(216, 216, 216);
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
