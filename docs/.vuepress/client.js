// TODO: [AppCustom]
import { defineClientConfig } from "vuepress/client";
import Layout from "./app-custom/layouts/Layout.vue";
import NotFound from "@vuepress/theme-default/lib/client/layouts/NotFound.vue";

import "./app-custom/index.scss";

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
});
