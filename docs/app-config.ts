interface IProject {
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

const Projects: IProjects = {
  DevCommit: {
    CustomLayout: true,
    BasePath: "/",
    Title: "DevCommit",
    Description: "Справочник",
    ThemeColor: "#3c31b5",
  },
  LetsCode: {
    CustomLayout: false,
    BasePath: "/workbook/",
    Title: "Let's Code Workbook",
    Description: "Методичка и справочные материалы",
    ThemeColor: "#3eaf7c",
  },
};

export default Projects.DevCommit as IProject;

// import AppConfig from "../app-config";
