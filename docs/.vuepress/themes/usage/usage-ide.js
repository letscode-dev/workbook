export const PATH_USAGE_IDE = "/themes/usage/ide";

const p = PATH_USAGE_IDE + "/";

export const THEME_USAGE_IDE = [
  {
    title: "IDE",
    children: [
      [p + "common/ide", "IDE"],
      [p + "common/online-ide", "Online IDE"],
      [p + "common/online-compilers", "Online Compilers"],
    ],
  },
  {
    title: "VSCode",
    children: [[p + "vscode/plugins", "Плагины"]],
  },
];
