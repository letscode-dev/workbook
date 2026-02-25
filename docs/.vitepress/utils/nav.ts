import type {
  IBuildTopics,
  IHeaderMenuNavChildren,
  TThemeTopics,
} from "../../types";

interface IGetNav {
  title: string;
  link: string;
  theme: TThemeTopics;
}

export function getNav(data: IBuildTopics): IHeaderMenuNavChildren {
  return {
    text: data.title,
    link: data.path,
    theme: data.theme,
  };
}
