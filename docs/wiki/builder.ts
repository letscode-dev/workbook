import { IHeaderMenuNav } from "docs/types";
import AppConfig from "../app-config";

import {
  NAV as DevCommitNav,
  SIDEBAR as DevCommitSidebar,
} from "./dev-commit/builder";
import {
  NAV as LetsCodeNav,
  SIDEBAR as LetsCodeSidebar,
} from "./lets-code/builder";

// export const NAV: IHeaderMenuNav[] = DevCommitNav;
// export const SIDEBAR = DevCommitSidebar;

export const NAV: IHeaderMenuNav[] = LetsCodeNav;
export const SIDEBAR = LetsCodeSidebar;
