## ⭐️ TODO

**Поиск**
- Заменить базовый поиск на Algolia
- https://ecosystem.vuejs.press/plugins/search/docsearch.html

**TODO**
- Добавить отдельную страницу `ui-kit` для кастомных ui-компонентов
- Заменить личные ссылки https://codepen.io/, на ссылки для школы

---

## ⭐️ Not Required

**Деплой**
- Деплой с GitHub Actions https://vuejs.press/guide/deployment.html#github-pages

**Информация снизу**
- Показываются данные: Last Updated, Contributors, Prev Page, Next Page
- https://v1.vuepress.vuejs.org/theme/default-theme-config.html#prev-next-links
- Убрать через настройки
- Пока скрыто стилями

> docs\.vuepress\styles\index.scss

```css
.vp-meta-item.git-info,
.vp-page-nav {
  display: none;
}
```
