import { defineConfig } from "vitepress";
import { NAV, SIDEBAR } from "../wiki/builder";
import { FF_CUSTOM_LAYOUT } from "../feature-flags";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { IThemeConfigNav } from "../types";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "/workbook/";

const customNavComposablePath = path.resolve(
  __dirname,
  "theme",
  "composables",
  "nav.js",
);

export default defineConfig({
  base: BASE,
  // FIXME: Разные значения для разных проектов
  title: "Let's Code Workbook",
  description: "Методичка и справочные материалы",
  head: [
    ["link", { rel: "icon", href: BASE + "favicon.svg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  srcDir: ".",
  outDir: ".vitepress/dist",
  cacheDir: ".vitepress/cache",
  ignoreDeadLinks: true,
  vite: {
    resolve: {
      alias: {
        "mark.js/src/lib/mark": path.join(
          __dirname,
          "..",
          "node_modules",
          "mark.js",
          "src",
          "lib",
          "mark.js",
        ),
      },
    },
    ssr: {
      noExternal: ["mark.js"],
    },
    plugins: [
      ...(FF_CUSTOM_LAYOUT
        ? [
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
        theme: c.theme,
      })),
    })) satisfies IThemeConfigNav[],
    sidebar: SIDEBAR,
    outline: { level: [2, 3] },
    search: { provider: "local" },
  },
  markdown: {
    theme: "one-light",
  },
});
