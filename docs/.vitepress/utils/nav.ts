import type { IGetNavReturn } from "../../types";

type TTheme =
  | "default"
  | "react"
  | "node"
  | "js"
  | "vue"
  | "html"
  | "primary"
  | "secondary"
  | "accent"
  | "actual"
  | "tech"
  | "theory";

export function getNav({
  title,
  link,
  theme = "default",
}: {
  title: string;
  link: string;
  theme?: TTheme;
}): IGetNavReturn {
  return {
    text: title,
    link,
    theme: "theme-" + theme,
  };
}
