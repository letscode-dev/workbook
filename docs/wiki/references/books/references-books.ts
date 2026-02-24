import { ISidebarTopics } from "../../../types";

export const p = "/wiki/references/books/";

export const t: ISidebarTopics[] = [
  {
    title: "Технологии",
    children: [
      [p + "tech/javascript", "JavaScript"],
      [p + "tech/html", "HTML и CSS"],
      [p + "tech/react", "React.js"],
      [p + "tech/redux", "Redux"],
      [p + "tech/typescript", "TypeScript"],
      [p + "tech/git", "Git"],
    ],
  },
  {
    title: "Общее",
    children: [
      [p + "common/books", "Книги"],
      [p + "common/articles", "Статьи"],
    ],
  },
];
