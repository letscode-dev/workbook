import { getSidebar } from "../.vitepress/utils/sidebar";
import { getNav } from "../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../types";

import WIKI_JS from "./learn/js/build-js";
import WIKI_GIT from "./learn/git/build-git";
import WIKI_BOOKS from "./references/books/build-books";
import WIKI_TECH from "./usage/tech/build-tech";
import WIKI_IDE from "./usage/ide/build-ide";

import WIKI_UI_KIT from "./system/ui-kit/build-ui-kit";

// FIXME: В getNav и getSidebar сразу передавать массив из WIKI
export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: getNav([WIKI_TECH, WIKI_IDE]),
  },
  {
    text: "Обучение",
    children: getNav([WIKI_GIT, WIKI_JS]),
  },
  {
    text: "Ссылки",
    children: getNav([WIKI_BOOKS]),
  },
  {
    text: "System",
    children: getNav([WIKI_UI_KIT]),
  },
];

export const SIDEBAR = {
  ...getSidebar(WIKI_JS),
  ...getSidebar(WIKI_GIT),
  ...getSidebar(WIKI_BOOKS),
  ...getSidebar(WIKI_TECH),
  ...getSidebar(WIKI_IDE),
  ...getSidebar(WIKI_UI_KIT),
};
