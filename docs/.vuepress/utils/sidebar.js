const getSidebarChildren = (children, index, num) => {
  const result = children.map(([path, title], indexChildren) => ({
    text: num ? `${index + 1}.${indexChildren + 1} ${title}` : `• ${title}`,
    link: path,
  }));

  return result;
};

export const getSidebar = (arr, path, num) => {
  const result = arr.map(({ title, children }, index) => ({
    text: `${index + 1}. ${title}`,
    children: getSidebarChildren(children, index, num),
    // collapsable: true,
  }));

  return { [path]: result };
};
