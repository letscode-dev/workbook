import { defineConfig } from "vitepress";
import { NAV, SIDEBAR } from "../themes/builder-vitepress";
import { useCustomLayout } from "./app-config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "/workbook/";
const DOCS_ROOT = path.join(__dirname, "..");

const customNavBarMenuPath = path.resolve(
  __dirname,
  "theme",
  "components",
  "VPNavBarMenu.vue"
);
const customNavComposablePath = path.resolve(
  __dirname,
  "theme",
  "composables",
  "nav.js"
);

/** Rewrites: виртуальный путь без .md для совместимости с dev-сервером */
function rewrites(id: string): string {
  const m = id.match(/^themes\/(usage|learn|references|uikit)\/(.*)\.md$/);
  if (m) return `${m[1]}/${m[2]}`;
  return id;
}

/** Резолв виртуальных путей (usage/..., learn/...) в реальные файлы для dev */
function vitepressRewritesResolvePlugin() {
  return {
    name: "vitepress-rewrites-resolve",
    enforce: "pre" as const,
    resolveId(id: string) {
      const clean = id.replace(/\?.*$/, "").replace(/^\/+/, "");
      const m = clean.match(
        /^(?:workbook\/)?(usage|learn|references|uikit)\/(.+\.md)$/
      );
      if (!m) return null;
      const [, segment, rest] = m;
      const resolved = path.join(DOCS_ROOT, "themes", segment, rest);
      if (fs.existsSync(resolved)) return resolved;
      return null;
    },
  };
}


export default defineConfig({
  base: BASE,
  title: "Let's Code Workbook",
  description: "Методичка и справочные материалы",
  head: [
    ["link", { rel: "icon", href: BASE + "favicon.svg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ],
  srcDir: ".",
  outDir: ".vitepress/dist",
  cacheDir: ".vitepress/cache",
  ignoreDeadLinks: true,
  rewrites,
  vite: {
    resolve: {
      alias: {
        "mark.js/src/lib/mark": path.join(__dirname, "..", "node_modules", "mark.js", "src", "lib", "mark.js"),
      },
    },
    ssr: {
      noExternal: ["mark.js"],
    },
    plugins: [
      vitepressRewritesResolvePlugin(),
      ...(useCustomLayout
        ? [
            {
              name: "resolve-custom-navbar-menu",
              enforce: "pre" as const,
              resolveId(id: string) {
                if (id.endsWith("VPNavBarMenu.vue")) {
                  return customNavBarMenuPath;
                }
              },
            },
            {
              name: "resolve-custom-nav-composable",
              enforce: "pre" as const,
              resolveId(id: string, importer?: string) {
                const fromDefaultTheme =
                  importer &&
                  importer.replace(/\\/g, "/").includes("theme-default");
                const isNavComposable =
                  id === "../composables/nav" ||
                  id.replace(/\\/g, "/").endsWith("composables/nav.js");
                if (fromDefaultTheme && isNavComposable) {
                  return customNavComposablePath;
                }
              },
            },
          ]
        : []),
    ],
  },
  themeConfig: {
    logo: "/logo.png",
    nav: NAV.map((group) => ({
      text: group.text,
      items: group.children.map((c) => ({
        text: c.text,
        link: c.link,
        theme: c.theme ?? "theme-default",
      })),
    })),
    sidebar: SIDEBAR,
    outline: { level: [2, 3] },
    search: { provider: "local" },
  },
  markdown: {
    theme: "one-light",
  },
});
