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

const config: IBuildTopics = {
  topics,
  path,
  title,
  theme,
};

export default config;
