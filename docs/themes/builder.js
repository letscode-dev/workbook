import { getSidebar } from "../.vuepress/utils/sidebar";
import { getNav } from "../.vuepress/utils/nav";

// LEARN
import { THEME_LEARN_JS, PATH_LEARN_JS } from "./learn/js/learn-js";
import { THEME_LEARN_GIT, PATH_LEARN_GIT } from "./learn/git/learn-git";

// REFERENCES
import {
  THEME_REFERENCES_BOOKS,
  PATH_REFERENCES_BOOKS,
} from "./references/books/references-books";

// USAGE
import { THEME_USAGE_TECH, PATH_USAGE_ITECH } from "./usage/tech/usage-tech";
import { THEME_USAGE_IDE, PATH_USAGE_IDE } from "./usage/ide/usage-ide";

export const NAV = [
  {
    text: "Usage",
    children: [
      getNav("Технологии", PATH_USAGE_ITECH + "/", "js"),
      getNav("IDE", PATH_USAGE_IDE + "/", "node"),
    ],
  },
  {
    text: "Обучение",
    children: [
      getNav("Git", PATH_LEARN_GIT + "/"),
      getNav("JavaScript", PATH_LEARN_JS + "/"),
    ],
  },
  // {
  //   text: "Roadmaps",
  //   children: [
  //     {
  //       text: "React Frontend Developer",
  //       link: "/posts/roadmaps/react-frontend-developer",
  //     },
  //   ],
  // },
  {
    text: "Ссылки",
    children: [getNav("Книги", PATH_REFERENCES_BOOKS + "/")],
  },
];

export const SIDEBAR = {
  // LEARN
  ...getSidebar(THEME_LEARN_JS, PATH_LEARN_JS),
  ...getSidebar(THEME_LEARN_GIT, PATH_LEARN_GIT),

  // REFERENCES

  ...getSidebar(THEME_REFERENCES_BOOKS, PATH_REFERENCES_BOOKS),

  // USAGE
  ...getSidebar(THEME_USAGE_TECH, PATH_USAGE_ITECH),
  ...getSidebar(THEME_USAGE_IDE, PATH_USAGE_IDE),
};
