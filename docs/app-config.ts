interface IProject {
  Name: "DevCommit" | "LetsCode";
  WikiDir: "dev-commit" | "lets-code";
  CustomLayout: boolean;
  BasePath: string;
  Title: string;
  Description: string;
  ThemeColor: string;
}

interface IProjects {
  DevCommit: IProject;
  LetsCode: IProject;
}

export const Projects: IProjects = {
  DevCommit: {
    Name: "DevCommit",
    WikiDir: "dev-commit",
    CustomLayout: true,
    BasePath: "/",
    Title: "DevCommit",
    Description: "Справочник",
    ThemeColor: "#ff0055",
  },
  LetsCode: {
    Name: "LetsCode",
    WikiDir: "lets-code",
    CustomLayout: false,
    BasePath: "/workbook/",
    Title: "Let's Code Workbook",
    Description: "Методичка и справочные материалы",
    ThemeColor: "#3eaf7c",
  },
};

export default Projects.DevCommit;
