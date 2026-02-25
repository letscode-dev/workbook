import type { IGetNavReturn, TThemeTopics } from "../../types";

interface IGetNav {
  title: string;
  link: string;
  theme: TThemeTopics;
}

export function getNav({ title, link, theme }: IGetNav): IGetNavReturn {
  return {
    text: title,
    link,
    theme,
  };
}
