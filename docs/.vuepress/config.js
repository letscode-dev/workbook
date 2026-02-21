import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { NAV, SIDEBAR } from "./builder";

import { getDirname, path } from "@vuepress/utils";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchPlugin } from "@vuepress/plugin-search";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";

const __dirname = getDirname(import.meta.url);

const BASE_NAME = "/workbook/";

export default defineUserConfig({
  alias: {
    "@theme/VPNavbar.vue": path.resolve(
      __dirname,
      "./app-custom/layouts/VPNavbar.vue",
    ),
    "@theme/VPNavbarItems.vue": path.resolve(
      __dirname,
      "./app-custom/layouts/VPNavbarItems.vue",
    ),
    "@theme/VPSidebar.vue": path.resolve(
      __dirname,
      "./app-custom/layouts/VPSidebar.vue",
    ),
  },
  base: BASE_NAME,
  title: "Let's Code Workbook",
  head: [
    ["link", { rel: "icon", href: BASE_NAME + "favicon.svg" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],
  description: "Методичка и справочные материалы",
  theme: defaultTheme({
    navbar: NAV,
    sidebar: SIDEBAR,
    sidebarDepth: 0,
    logo: "./logo.png",
  }),
  plugins: [
    registerComponentsPlugin({
      components: {
        ["v-details"]: path.resolve(__dirname, "./components/v-details.vue"),
        ["v-iframe"]: path.resolve(__dirname, "./components/v-iframe.vue"),
        ["v-padding"]: path.resolve(__dirname, "./components/v-padding.vue"),
        ["v-two"]: path.resolve(__dirname, "./components/v-two.vue"),
      },
    }),
    // docsearchPlugin({
    // E-mail
    // appId: "ZK2XHJMB8J",
    // apiKey: "e6ed4285275fcc1c0ee7e1a6d69bed93",
    // Dashboard Algolia
    // appId: "AV6EC3XYAM",
    // apiKey: "d34be2ca9cc0f470d67b523acb7f76f3",
    // indexName: "letscode-devio",
    // }),
    searchPlugin({
      // options
    }),
    shikiPlugin({
      langs: [
        "js",
        "ts",
        "html",
        "css",
        "jsx",
        "tsx",
        "php",
        "json",
        "vue",
        "md",
        "bash",
      ],
      theme: "one-light",
    }),
  ],
  bundler: viteBundler(),
});
