import { getSidebar } from "../.vitepress/utils/sidebar";
import { getNav } from "../.vitepress/utils/nav";
import type { IHeaderMenuNav } from "../types";

import { t as THEME_LEARN_JS, p as PATH_LEARN_JS } from "./learn/js/learn-js";
import {
  t as THEME_LEARN_GIT,
  p as PATH_LEARN_GIT,
} from "./learn/git/learn-git";
import {
  t as THEME_REFERENCES_BOOKS,
  p as PATH_REFERENCES_BOOKS,
} from "./references/books/references-books";
import {
  t as THEME_USAGE_TECH,
  p as PATH_USAGE_ITECH,
} from "./usage/tech/usage-tech";
import {
  t as THEME_USAGE_IDE,
  p as PATH_USAGE_IDE,
} from "./usage/ide/usage-ide";
import { t as THEME_UIKIT_UI, p as PATH_UIKIT_UI } from "./uikit/ui/uikit-ui";

export const NAV: IHeaderMenuNav[] = [
  {
    text: "Usage",
    children: [
      getNav({
        title: "Технологии",
        link: PATH_USAGE_ITECH,
        theme: "js",
      }),
      getNav({ title: "IDE", link: PATH_USAGE_IDE + "/", theme: "node" }),
    ],
  },
  {
    text: "Обучение",
    children: [
      getNav({ title: "Git", link: PATH_LEARN_GIT + "/" }),
      getNav({ title: "JavaScript", link: PATH_LEARN_JS + "/" }),
    ],
  },
  {
    text: "Ссылки",
    children: [getNav({ title: "Книги", link: PATH_REFERENCES_BOOKS + "/" })],
  },
  {
    text: "Utils",
    children: [getNav({ title: "Ui-Kit", link: PATH_UIKIT_UI + "/" })],
  },
];

export const SIDEBAR = {
  ...getSidebar({ arr: THEME_LEARN_JS, path: PATH_LEARN_JS }),
  ...getSidebar({ arr: THEME_LEARN_GIT, path: PATH_LEARN_GIT }),
  ...getSidebar({ arr: THEME_REFERENCES_BOOKS, path: PATH_REFERENCES_BOOKS }),
  ...getSidebar({ arr: THEME_USAGE_TECH, path: PATH_USAGE_ITECH }),
  ...getSidebar({ arr: THEME_USAGE_IDE, path: PATH_USAGE_IDE }),
  ...getSidebar({ arr: THEME_UIKIT_UI, path: PATH_UIKIT_UI }),
};
