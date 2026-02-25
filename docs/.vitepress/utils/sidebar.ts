import type { DefaultTheme } from "vitepress";
import type { ISidebarTopics, TSidebarTopicsItem } from "../../types";

function getSidebarChildren(
  children: TSidebarTopicsItem[],
  index: number,
  num?: number,
): DefaultTheme.SidebarItem[] {
  return children.map(([path, title], indexChildren) => ({
    text: num ? `${index + 1}.${indexChildren + 1} ${title}` : `• ${title}`,
    link: path,
  }));
}

interface IGetSidebar {
  topics: ISidebarTopics[];
  path: string;
  num?: number;
}
export function getSidebar({
  topics,
  path,
  num,
}: IGetSidebar): Record<string, DefaultTheme.SidebarItem[]> {
  const result: DefaultTheme.SidebarItem[] = topics.map(
    ({ title, children }, index) => ({
      text: title,
      items: getSidebarChildren(children, index, num),
    }),
  );
  const key = path.endsWith("/") ? path : path + "/";
  return { [key]: result };
}
