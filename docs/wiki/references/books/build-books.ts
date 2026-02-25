import { IBuildTopics, ISidebarTopics, TThemeTopics } from "../../../types";

const path = "/wiki/references/books/";
const title = "Книги";
const theme: TThemeTopics = null;

const p = path;

const topics: ISidebarTopics[] = [
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

const config: IBuildTopics = {
  topics,
  path,
  title,
  theme,
};

export default config;
