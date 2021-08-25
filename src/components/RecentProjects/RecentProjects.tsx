import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./RecentProjects.module.css";
import an_shop_pic from "../../assets/images/an_shoop.png";
import CBMR from "../../assets/images/CBMR.png";
import ToDo from "../../assets/images/ToDo.png";
import Profile from "../../assets/images/Profile.png";
import InvertedIndex from "../../assets/images/InvertedIndex.png";
export interface RecentProejectProps {}

const RecentProeject: React.SFC<RecentProejectProps> = () => {
  const projects = [
    {
      imp: true,
      title: "My Portfolio",
      description: [
        "This project aims to show my skills and my recent projects",
        "The Project uses ReactJS for the web client ",
        "responsive on the mobile devices",
      ],
      type: "web(React)",
      links: {
        github: "https://github.com/AdhamNour/my_profile",
        visit: "https://anprofile.herokuapp.com/",
      },
      pic: Profile,
    },
    {
      imp: true,
      title: "LMS - Learning Manegment System",
      description: [
        "This project aims to create a platform that provides the services required for remote education as part of a graduation project at Ain Shams University.",
        "The Project uses ReactJS for the web client and React Native for the mobile client",
        "Implemented the mobile client and participated in the web frontend",
      ],
      type: "web(React)/mobile(React Native)",
      links: {
        github:
        "https://github.com/Graduation-Team-2021/LMS-Graduation-Project",
      },
      pic: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
    },
    {
      imp: true,
      title: "AN Shop Application",
      description: [
        "The Application is an e-commerce application with cart and provide the user with the ability to sell their own products",
        "The application use flutter to implement the mobile application and Firebase as backend (backend as a service – the free tier)",
      ],
      type: "mobile(Flutter)",
      links: {
        github: "https://github.com/AdhamNour/AN_shop_application",
        download:
          "https://cdn.fbsbx.com/v/t59.2708-21/213070577_647240746676148_3608937782739121501_n.docx/mm-project-1.docx?_nc_cat=100&ccb=1-5&_nc_sid=0cab14&_nc_ohc=vqPXp9x4Z00AX9KLPz4&_nc_ht=cdn.fbsbx.com&oh=96954de3bd8f42b3beaff8a9703f0972&oe=61263AE3&dl=1",
        youtube: "https://youtu.be/-cC8QkxEhX8",
      },
      pic: an_shop_pic,
    },
    {
      title: "Content Based Multimeadia Retrival System",
      description: [
        "The project is implementation of a search engine that search the set of pictures and videos and extract the most similar one to the search target",
        "The Projects uses Flutter to Implement the mobile client and Flask (Python Microframework for backend development)",
        "Implemented the frontend part and participated in the backend of this project",
      ],
      type: "mobile(Flutter)/web(Flask)",
      links: {
        github:
          "https://github.com/AdhamNour/ContentBasedMultimediaRetrivalSystem",
      },
      pic: CBMR,
    },
    {
      title: "ToDOFlutter",
      description: [
        "The project helps the user to create its own tasks and divide it into subtasks then store them in SQLite database on the users phone storage",
        "The Projects uses flutter to implement the mobile application",
      ],
      type: "mobile(Flutter)",
      links: {
        github: "https://github.com/AdhamNour/ToDoFlutter",
      },
      pic: ToDo,
    },
    {
      title: "The Dark Bluetooth",
      description: [
        "The application is implemented to send certain character (or stream of character) to TivaC microcontroller (or any other microcontroller that uses the same coding to function) using Bluetooth",
      ],
      type: "mobile(Native Android)",
      links: {
        github: "https://github.com/AdhamNour/The_Dark_Blurtooth",
      },
      pic: "https://images.unsplash.com/photo-1603731955926-81917dad5a80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80",
    },
    {
      title: "The Inverted Index",
      description: [
        "Inverted Index Project is searching for a word or a symbol in any set of file using Trie data structure implemented with Qt Creator and C++",
      ],
      type: "Desktop(C++)",
      links: {
        github: "https://github.com/AdhamNour/The_Dark_Blurtooth",
        youtube: "https://youtu.be/acHyS83wAaE",
      },
      pic: InvertedIndex,
    },
  ];

  return (
    <div className={classes.RecentProjectsContainer} id="RecentProjects">
      <h1>My Recent Project</h1>
      <div className={classes.ProjectsContainer}>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProeject;
