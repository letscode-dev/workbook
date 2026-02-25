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
    children: [
      getNav({
        title: WIKI_TECH.title,
        link: WIKI_TECH.path,
        theme: WIKI_TECH.theme,
      }),
      getNav({
        title: WIKI_IDE.title,
        link: WIKI_IDE.path,
        theme: WIKI_IDE.theme,
      }),
    ],
  },
  {
    text: "Обучение",
    children: [
      getNav({
        title: WIKI_GIT.title,
        link: WIKI_GIT.path,
        theme: WIKI_GIT.theme,
      }),
      getNav({
        title: WIKI_JS.title,
        link: WIKI_JS.path,
        theme: WIKI_JS.theme,
      }),
    ],
  },
  {
    text: "Ссылки",
    children: [
      getNav({
        title: WIKI_BOOKS.title,
        link: WIKI_BOOKS.path,
        theme: WIKI_BOOKS.theme,
      }),
    ],
  },
  {
    text: "System",
    children: [
      getNav({
        title: WIKI_UI_KIT.title,
        link: WIKI_UI_KIT.path,
        theme: WIKI_UI_KIT.theme,
      }),
    ],
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
