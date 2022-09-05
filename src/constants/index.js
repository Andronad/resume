import Project from "./../classes/Project";

export const hardSkills = [
    "•  Working experience in HTML, CSS",
    "•  Solid experience in JavaScript (ES5+)",
    "•  Working experience in Front-end development (React, Redux, Material UI)",
    "•  Working experience in testing of Web application",
    "•  Solid experience in Git",
];

export const softSkills = [
    "•	Good understanding of all stages of software development process ",
    "•	Working experience in Agile methodologies",
    "•	Great experience in communication with customers and external support teams",
    "•	Productive and creative for problem solving",
    "•	Good time management",
    "•	Responsible",
    "•	Communicative",
    "•	Enthusiastic",
];

export const skillsSummary = [
    {
        key: "Programming Languages",
        value: "JavaScript, TypeScript, SQL, PL/1, REXX, JCL",
    },

    {
        key: "Web Technologies:",
        value: "React, Redux, Redux thunk, Redux saga, Mobx, Material UI, HTML, CSS(SCSS),  Webpack, Angular, Personal Communications IBM",
    },

    {
        key: "Databases:",
        value: "DB2, MySQL, IMS",
    },
    {
        key: "Operating Systems:",
        value: "Windows Family, Linux, z/OS",
    },

    {
        key: "Other Skills:",
        value: "Jest, Git, MVS (z/OS), Visual Studio Code, Jira",
    },

    {
        key: "Foreign Languages:",
        value: "English	 (Upper-Intermediate)",
    },
];

export const myProjects = [
    new Project(
        "Nov 2021 – Jun 2022",
        "IBA Group (Application Developer)",
        "Highload, IBA (Highly loaded Application for collecting and processing payments",
        [
            "UX/UI design (Figma) ",
            "Front-end development: HTML/CSS(SCSS) customization, creating UI components using React+Typescript and Material UI, data state controlling using Redux + Redux thunk ",
            "Creation of tests using Jest and Enzyme",
            "Review, test and debug team members’ code",
            "Participation in daily agile meetings",
            "Participation in retrospective, demo, sprint planning meetings after each iteration",
        ],
        "JavaScript, TypeScript, React, Redux, Redux thunk, HTML, CSS, SASS, Material UI, Figma, Webpack, GitLab, Jira API"
    ),
    new Project(
        "Jan 2020 – Oct 2021",
        "IBA Group (Application Developer)",
        "CollectMe, IBA (Web Application for collecting and processing monthly user reports )",
        [
            "UI React, HTML, CSS(SCSS) customization. Frontend development ",
            "UI data management using Redux + Redux Saga ",
            "Development of REST API",
            "Creation of automated tests for UI with Selenium WebDriver",
            "Review, test and debug team members’ code",
            "Participation in daily agile meetings",
            "Participation in retrospective meetings after each iteration",
        ],
        "React, Redux, Redux Saga, JavaScript, Bootstrap, HTML, CSS, Jira API"
    ),
    new Project(
        "July 2019 – Jan 2020",
        "IBA Group (Application Developer)",
        "APPULSE, IBA (client with friendly interface for all z/OS services)",
        [
            "Frontend development using Angular, Typescript and Bootstrap",
            "HTML/CSS(SCSS) customization",
            "Participation in daily agile meetings",
            "Participation in retrospective meetings after each iteration",
            "Regular communications with different members involved in the project (developers, key-users, business analyst)",
        ],
        "JavaScript, TypeScript, Angular, Bootstrap, z/OS, IMS, IMS Connect, Agile, Jira API"
    ),
    new Project(
        "June 2019 - ???",
        "IBA Group (Application Developer)",
        "CARS, IBM (Common Account Receivable System)",
        [
            "Providing daily production support",
            "Providing support for business help desk users",
            "Development of PL/1 programs, REXX routines",
            "Development of JCL jobs and procedures",
            "Development of interfaces for downstream partners (FTP sending)",
            "Analysis of requested software enhancements, estimation, development and appropriate solution planning",
            "Unit testing, support for UAT, analysis of IMS, DB2, MVS logs in case of errors",
            "Working with DB2 objects by means of QMF and SPUFI tools, Rational tools",
            "Creation of different TWS objects (OPC applications, ETT triggers, periods, etc) ",
            "Scheduling batches in test environment on users request, monitoring and fixing jobs in error",
            "Creation and managing of project technical documentation",
            "Communication with different groups of technical support (DB2, MVS, IMS, Storage, Operations Analysts, etc)",
            "Regular communications with different members involved in the project (developers, key-users, business analysts)",
            "Participation/handling daily agile meetings and retrospectives",
            "Participation in planning meetings for different development projects",
            "Training for newcomers",
        ],
        "z/OS, DB2, IMS, DB2 Admin, MQ, JCL, SQL, QMF, SPUFI, FTP, SDSF, TWS/OPC, PL/I, REXX, ISPF, IBM Personal Communication"
    ),
];
