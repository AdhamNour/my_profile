import React from "react";
import classes from "./ProjectItem.module.css";
export interface ProjectItemProps {
  project: {
    title: string;
    description: string[];
    imp?: boolean;
    type: string;
  };
}

const ProjectItem: React.SFC<ProjectItemProps> = ({ project }) => {
  return (
    <div className={classes.ProjectItemContainer}>
      <div className={classes.ProjectItemContainerInner}>
        <div className={classes.ProjectItemContainerInnerFront}>
          <h1>{project.title}</h1>
        </div>
        <div className={classes.ProjectItemContainerInnerBack}>
          <h2>{project.title}</h2>
          <h3>{project.type}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
