import React, { useRef, useState } from "react";
import classes from "./ProjectItem.module.css";
import {
  AiFillGithub,
  AiOutlineDownload,
  AiFillYoutube,
  AiOutlineRight,
} from "react-icons/ai";
import aos from "aos";
import "aos/dist/aos.css";

import pic from "../../../assets/images/phone.jpg";
export interface ProjectItemProps {
  project: {
    title: string;
    description?: string[];
    type: string;
    imp?: boolean;
    links?: {
      youtube?: string;
      github?: string;
      download?: string;
      visit?: string;
    };
    pic?: string;
  };
}
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [imageState, setImageState] = useState<React.CSSProperties>({
    display: "block",
  });
  const isHovering = useRef<Boolean>(false);
  return (
    <div
      className={[
        classes.ProjectItemContainer,
        project.imp ? classes.ProjectItemContainerImportant : "",
      ].join(" ")}
      data-aos="fade-up"
    >
      <div
        className={classes.ProjectItemContainerInner}
        onMouseEnter={(e) => {
          isHovering.current = true;
          setTimeout(() => {
            if (isHovering.current) setImageState({ display: "none" });
          }, 500);
        }}
        onMouseLeave={(e) => {
          isHovering.current = false;
          setImageState({ display: "block" });
        }}
      >
        <div
          className={classes.ProjectItemContainerInnerFront}
          style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
        >
          <img
            src={project.pic ? project.pic : pic}
            alt=""
            style={imageState}
          />
          <h1>{project.title}</h1>
          <h3>{project.type}</h3>
        </div>
        <div className={classes.ProjectItemContainerInnerBack}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h2>{project.title}</h2>
            <h5>{project.type}</h5>
            <ul>
              {project.description?.map((d, i) => {
                return <li key={i}>{d}</li>;
              })}
            </ul>
          </div>
          <div className={classes.AccessContianer}>
            {project.links?.github ? (
              <a
                className={classes.github}
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub fontSize="40" />
              </a>
            ) : null}
            {project.links?.youtube ? (
              <a
                className={classes.youtube}
                href={project.links.youtube}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillYoutube fontSize="40" />
              </a>
            ) : null}
            {project.links?.download ? (
              <a
                className={classes.download}
                href={project.links.download}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineDownload fontSize="40" />
              </a>
            ) : null}
            {project.links?.visit ? (
              <a
                className={classes.visit}
                href={project.links.visit}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineRight fontSize="40" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
