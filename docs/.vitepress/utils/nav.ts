import type { IHeaderMenuNavChildren, TThemeTopics } from "../../types";

interface IGetNav {
  title: string;
  link: string;
  theme: TThemeTopics;
}

export function getNav({
  title,
  link,
  theme,
}: IGetNav): IHeaderMenuNavChildren {
  return {
    text: title,
    link,
    theme,
  };
}
