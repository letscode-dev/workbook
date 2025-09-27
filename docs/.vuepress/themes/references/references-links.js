export const PATH_REFERENCES_LINKS = "/themes/references/links";

const p = PATH_REFERENCES_LINKS + "/";

export const THEME_REFERENCES_LINKS = [
  {
    title: "Не разработка",
    children: [
      [p + "other/services", "Сервисы общего назначения"],
    ],
  },
  {
    title: "Фреймворки",
    children: [
      [p + "frameworks/react", "React.js"],
      [p + "frameworks/vue", "Vue.js"],
      [p + "frameworks/node", "Node.js"],
      [p + "frameworks/frameworks", "Frameworks"],
    ],
  },
  {
    title: "Вёрстка",
    children: [
      [p + "html/main", "Общее"],
      [p + "html/infographics", "Инфографика"],
      [p + "html/layouts", "Макеты"],
      [p + "html/tools", "Инструменты"],
      [p + "html/libs", "Библиотеки"],
    ],
  },
  {
    title: "Технологии",
    children: [
      [p + "tech/api", "Свободное API"],
      [p + "tech/builders", "Сборщики"],
      [p + "tech/deploy", "Деплой"],
      [p + "tech/e2e", "E2E тестирование"],
      [p + "tech/wiki", "Разработка документации и Wiki"],
      [p + "tech/3d", "3D графика"],
      [p + "tech/repo", "Репозитории проектов"],
      [p + "tech/webcomponents", "WebComponents"],
      [p + "tech/cms", "CMS"],
    ],
  },
  {
    title: "Общее",
    children: [
      [p + "common/technical-interview", "Technical Interview"],
      [p + "common/games", "Игры"],
      [p + "common/training", "Тренировки и план развития"],
      [p + "common/schools", "Школы программирования"],
      [p + "common/freelance", "Фриланс-биржи"],
      [p + "common/svg-logo", "Создание SVG логотипа"],
      [p + "common/common", "Общее"],
    ],
  },
];
