export const PATH_USAGE_LLM = "/themes/usage/llm";

const p = PATH_USAGE_LLM + "/";

export const THEME_USAGE_LLM = [
  {
    title: "Категории",
    children: [
      [p + "category/text", "Текст"],
      [p + "category/image", "Изображения"],
      [p + "category/video", "Видео"],
      [p + "category/sound", "Звук"],
      [p + "category/3d", "3D модели"],
    ],
  },
  {
    title: "Общее",
    children: [
      [p + "common/common", "Общее"],
      [p + "common/editors", "Редакторы фото и видео"],
      [p + "common/presentations", "Презентации"],
    ],
  },
];
