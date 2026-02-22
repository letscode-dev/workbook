import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import VDetails from "../components/v-details.vue";
import VIframe from "../components/v-iframe.vue";
import VPadding from "../components/v-padding.vue";
import VTwo from "../components/v-two.vue";
import VMarker from "../components/v-marker.vue";
import VBreadcrumbs from "../components/v-breadcrumbs.vue";

import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("v-details", VDetails);
    app.component("v-iframe", VIframe);
    app.component("v-padding", VPadding);
    app.component("v-two", VTwo);
    app.component("v-marker", VMarker);
    app.component("v-breadcrumbs", VBreadcrumbs);
  },
} satisfies Theme;
