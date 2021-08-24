import React from "react";
import ProjectItem from "./ProjectItem/ProjectItem";
import classes from "./RecentProjects.module.css";
export interface RecentProejectProps {}

const RecentProeject: React.SFC<RecentProejectProps> = () => {
  const projects = [];
  for (let index = 0; index < 10; index++) {
    projects.push({
      title: `fuck ${index}`,
      description: [
        "hi this is supposed to be another long text",
        "this is supposed to be very long text",
      ],
      type: "Mobile",
    });
  }

  return (
    <div className={classes.RecentProjectsContainer} id="RecentProjects">
      <h1>my recent project</h1>
      <div className={classes.ProjectsContainer}>
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </div>
    </div>
  );
};

export default RecentProeject;
