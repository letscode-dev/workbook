import { IBuildTopics, ISidebarTopics, TThemeTopics } from "../../../types";

const path = "/wiki/system/ui-kit/";
const title = "Ui-Kit";
const theme: TThemeTopics = null;

const p = path;

const topics: ISidebarTopics[] = [
  {
    title: "Компоненты",
    children: [
      [p + "components/v-details", "v-details"],
      [p + "components/v-iframe", "v-iframe"],
      [p + "components/v-two", "v-two"],
      [p + "components/v-breadcrumbs", "v-breadcrumbs"],
      [p + "components/v-marker", "v-marker"],
      [p + "components/v-padding", "v-padding"],
    ],
  },
  {
    title: "Категории",
    children: [
      [p + "category/custom-containers", "Custom Containers VitePress"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
