export type TSidebarItemTuple = [path: string, title: string];

export interface ISidebarThemes {
  title: string;
  children: TSidebarItemTuple[];
}
