import { ISidebarTopics } from "../../../types";

export const PATH_UIKIT_UI = "/uikit/ui";

const p = PATH_UIKIT_UI + "/";

export const THEME_UIKIT_UI: ISidebarTopics[] = [
  {
    title: "Компоненты",
    children: [
      [p + "components/v-details", "v-details"],
      [p + "components/v-iframe", "v-iframe"],
      [p + "components/v-padding", "v-padding"],
      [p + "components/v-two", "v-two"],
    ],
  },
];
