import { getSidebar } from "../.vitepress/utils/sidebar";
import { getNav } from "../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../types";

import WIKI_JS from "./learn/js/learn-js";
import WIKI_GIT from "./learn/git/learn-git";
import WIKI_BOOKS from "./references/books/references-books";
import WIKI_TECH from "./usage/tech/usage-tech";
import WIKI_IDE from "./usage/ide/usage-ide";

import WIKI_UI_KIT from "./uikit/ui/uikit-ui";

// FIXME:
// - В getNav и getSidebar сразу передавать объект
// - "p" добавлять в getSidebar: [p + "basic/ecmascript", "Стандарт ECMAScript"]

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: [
      getNav({ title: WIKI_TECH.title, link: WIKI_TECH.path, theme: "js" }),
      getNav({ title: WIKI_IDE.title, link: WIKI_IDE.path, theme: "node" }),
    ],
  },
  {
    text: "Обучение",
    children: [
      getNav({ title: WIKI_GIT.title, link: WIKI_GIT.path }),
      getNav({ title: WIKI_JS.title, link: WIKI_JS.path }),
    ],
  },
  {
    text: "Ссылки",
    children: [getNav({ title: WIKI_BOOKS.title, link: WIKI_BOOKS.path })],
  },
  {
    text: "Utils",
    children: [getNav({ title: WIKI_UI_KIT.title, link: WIKI_UI_KIT.path })],
  },
];

export const SIDEBAR = {
  ...getSidebar({ arr: WIKI_JS.topics, path: WIKI_JS.path }),
  ...getSidebar({ arr: WIKI_GIT.topics, path: WIKI_GIT.path }),
  ...getSidebar({ arr: WIKI_BOOKS.topics, path: WIKI_BOOKS.path }),
  ...getSidebar({ arr: WIKI_TECH.topics, path: WIKI_TECH.path }),
  ...getSidebar({ arr: WIKI_IDE.topics, path: WIKI_IDE.path }),
  ...getSidebar({ arr: WIKI_UI_KIT.topics, path: WIKI_UI_KIT.path }),
};
