import { IBuildTopics, ISidebarTopics, TThemeTopics } from "../../../types";

const path = "/wiki/usage/ide/";
const title = "IDE";
const theme: TThemeTopics = null;

const p = path;

const topics: ISidebarTopics[] = [
  {
    title: "IDE",
    children: [
      [p + "common/ide", "IDE"],
      [p + "common/online-ide", "Онлайн IDE"],
      [p + "common/online-compilers", "Онлайн компиляторы"],
    ],
  },
  {
    title: "VSCode",
    children: [[p + "vscode/plugins", "Плагины"]],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
