import { getSidebar } from "../.vitepress/utils/sidebar";
import { getNav } from "../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../types";

import WIKI_JS from "./learn/js/build-js";
import WIKI_GIT from "./learn/git/build-git";
import WIKI_BOOKS from "./references/books/build-books";
import WIKI_TECH from "./usage/tech/build-tech";
import WIKI_IDE from "./usage/ide/build-ide";

import WIKI_UI_KIT from "./system/ui-kit/build-ui-kit";

// FIXME: В getNav и getSidebar сразу передавать объект
export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: [getNav(WIKI_TECH), getNav(WIKI_IDE)],
  },
  {
    text: "Обучение",
    children: [getNav(WIKI_GIT), getNav(WIKI_JS)],
  },
  {
    text: "Ссылки",
    children: [getNav(WIKI_BOOKS)],
  },
  {
    text: "System",
    children: [getNav(WIKI_UI_KIT)],
  },
];

export const SIDEBAR = {
  ...getSidebar({ topics: WIKI_JS.topics, path: WIKI_JS.path }),
  ...getSidebar({ topics: WIKI_GIT.topics, path: WIKI_GIT.path }),
  ...getSidebar({ topics: WIKI_BOOKS.topics, path: WIKI_BOOKS.path }),
  ...getSidebar({ topics: WIKI_TECH.topics, path: WIKI_TECH.path }),
  ...getSidebar({ topics: WIKI_IDE.topics, path: WIKI_IDE.path }),
  ...getSidebar({ topics: WIKI_UI_KIT.topics, path: WIKI_UI_KIT.path }),
};
