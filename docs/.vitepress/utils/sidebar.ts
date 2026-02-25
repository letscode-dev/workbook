import type { DefaultTheme } from "vitepress";
import type { IBuildTopics, TSidebarTopicsItem } from "../../types";

function getSidebarChildren(
  children: TSidebarTopicsItem[],
  fullPath: string,
): DefaultTheme.SidebarItem[] {
  return children.map(([path, title]) => {
    return {
      text: `• ${title}`,
      link: fullPath + path,
    };
  });
}

export function getSidebar(
  data: IBuildTopics,
): Record<string, DefaultTheme.SidebarItem[]> {
  const result: DefaultTheme.SidebarItem[] = data.topics.map(
    ({ title, children }) => ({
      text: title,
      items: getSidebarChildren(children, data.path),
    }),
  );

  return { [data.path]: result };
}
