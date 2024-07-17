import { getSidebar } from "./utils/sidebar";
import { getNav } from "./utils/nav";

// LEARN
import { THEME_LEARN_JS, PATH_LEARN_JS } from "./themes/learn/learn-js";
import { THEME_LEARN_GIT, PATH_LEARN_GIT } from "./themes/learn/learn-git";

// REFERENCES
import {
  THEME_REFERENCES_LINKS,
  PATH_REFERENCES_LINKS,
} from "./themes/references/references-links";
import {
  THEME_REFERENCES_BOOKS,
  PATH_REFERENCES_BOOKS,
} from "./themes/references/references-books";

// USAGE
import { THEME_USAGE_IDE, PATH_USAGE_IDE } from "./themes/usage/usage-ide";

export const NAV = [
  // getNav('Title', PATH),

  // TODO: check
  {
    text: "Learn",
    children: [
      getNav("Git", PATH_LEARN_GIT + "/"),
      getNav("JavaScript", PATH_LEARN_JS + "/"),
    ],
  },
  {
    text: "Roadmaps",
    children: [
      {
        text: "React Frontend Developer",
        link: "/posts/roadmaps/react-frontend-developer",
      },
    ],
  },
  {
    text: "Usage",
    children: [getNav("IDE", PATH_USAGE_IDE + "/")],
  },
  {
    text: "References",
    children: [
      getNav("Ссылки", PATH_REFERENCES_LINKS + "/"),
      getNav("Книги", PATH_REFERENCES_BOOKS + "/"),
    ],
  },
];

export const SIDEBAR = {
  // LEARN
  ...getSidebar(THEME_LEARN_JS, PATH_LEARN_JS),
  ...getSidebar(THEME_LEARN_GIT, PATH_LEARN_GIT),

  // REFERENCES
  ...getSidebar(THEME_REFERENCES_LINKS, PATH_REFERENCES_LINKS),
  ...getSidebar(THEME_REFERENCES_BOOKS, PATH_REFERENCES_BOOKS),

  // USAGE
  ...getSidebar(THEME_USAGE_IDE, PATH_USAGE_IDE),
};
