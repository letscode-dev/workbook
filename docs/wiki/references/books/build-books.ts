import { IBuildTopics, ISidebarTopics, TThemeTopics } from "../../../types";

const path = "/wiki/references/books/";
const title = "Книги";
const theme: TThemeTopics = null;

const topics: ISidebarTopics[] = [
  {
    title: "Технологии",
    children: [
      ["tech/javascript", "JavaScript"],
      ["tech/html", "HTML и CSS"],
      ["tech/react", "React.js"],
      ["tech/redux", "Redux"],
      ["tech/typescript", "TypeScript"],
      ["tech/git", "Git"],
    ],
  },
  {
    title: "Общее",
    children: [
      ["common/books", "Книги"],
      ["common/articles", "Статьи"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
