interface IProject {
  Name: "DevCommit" | "LetsCode";
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
    Name: "DevCommit",
    CustomLayout: true,
    BasePath: "/",
    Title: "DevCommit",
    Description: "Справочник",
    ThemeColor: "#3c31b5",
  },
  LetsCode: {
    Name: "LetsCode",
    CustomLayout: false,
    BasePath: "/workbook/",
    Title: "Let's Code Workbook",
    Description: "Методичка и справочные материалы",
    ThemeColor: "#3eaf7c",
  },
};

export default Projects.DevCommit;

// import AppConfig from "../app-config";
