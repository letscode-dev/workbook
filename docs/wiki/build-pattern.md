# Шаблон

```ts
import { IBuildTopics, ISidebarTopics, TThemeTopics } from "../../../types";

const path = "/wiki/learn/git/";
const title = "Git";
const theme: TThemeTopics = "node"; // null

const topics: ISidebarTopics[] = [
  {
    title: "Категория",
    children: [
      ["dir/file", "Тема проработана", "done"],
      ["dir/file", "Тема НЕ проработана", "check"],
    ],
  },
];

export default { topics, path, title, theme } satisfies IBuildTopics;
```
