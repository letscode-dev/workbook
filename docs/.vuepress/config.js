import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { NAV, SIDEBAR } from "./builder";

import { getDirname, path } from "@vuepress/utils";

import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
// import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";

const __dirname = getDirname(import.meta.url);

const BASE_NAME = "/workbook/";

export default defineUserConfig({
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
  }),
  plugins: [
    "@vuepress/plugin-medium-zoom",
    registerComponentsPlugin({
      components: {
        ["v-details"]: path.resolve(__dirname, "./components/v-details.vue"),
        ["v-iframe"]: path.resolve(__dirname, "./components/v-iframe.vue"),
        ["v-padding"]: path.resolve(__dirname, "./components/v-padding.vue"),
        ["v-two"]: path.resolve(__dirname, "./components/v-two.vue"),
      },
    }),
    // mediumZoomPlugin({
    //   // options
    // }),
    // docsearchPlugin({
    //   // options
    // }),
  ],
  bundler: viteBundler(),
});
