// className: primary | secondary | accent | actual

export const getNav = (title, link, theme) => {
  return {
    text: title,
    link: link,
    theme: "theme-" + theme,
  };
};
