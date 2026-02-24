import { ISidebarTopics } from "../../../types";

export const p = "/wiki/usage/ide/";

export const t: ISidebarTopics[] = [
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
