import { getSidebar } from "../.vitepress/utils/sidebar";
import { getNav } from "../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../types";

import AppConfig from "../app-config";

import wikiJs from "./learn/js/build-js";
import wikiGit from "./learn/git/build-git";
import wikiBooks from "./references/books/build-books";
import wikiTech from "./usage/tech/build-tech";
import wikiIde from "./usage/ide/build-ide";

import wikiUiKit from "./system/ui-kit/build-ui-kit";

// FIXME: Добавить типы для DevCommit и LetsCode из app-config
const NavData = {
  DevCommit: {
    nav: [
      {
        text: "System",
        children: getNav([wikiUiKit]),
      },
    ],
    sidebar: getSidebar([wikiUiKit]),
  },
  LetsCode: {
    nav: [
      {
        text: "Usage",
        children: getNav([wikiTech, wikiIde]),
      },
      {
        text: "Обучение",
        children: getNav([wikiGit, wikiJs]),
      },
      {
        text: "Ссылки",
        children: getNav([wikiBooks]),
      },
    ],
    sidebar: getSidebar([wikiJs, wikiGit, wikiBooks, wikiTech, wikiIde]),
  },
};

export const NAV: IHeaderMenuNav[] = NavData[AppConfig.Name].nav;
export const SIDEBAR = NavData[AppConfig.Name].sidebar;
