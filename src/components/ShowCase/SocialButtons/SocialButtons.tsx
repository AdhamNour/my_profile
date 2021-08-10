import React from "react";
import classes from "./SocialButtons.module.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export interface SocialButtonsProps {}

const SocialButtons: React.SFC<SocialButtonsProps> = () => {
  return (
    <div className={classes.SocialButtonsContainer}>
      <a
        href="https://www.linkedin.com/in/adham-nour-el-waffaa-mohammed/"
        target="_blank"
        rel="noreferrer"
        className={classes.linkedin}
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/AdhamNour"
        target="_blank"
        rel="noreferrer"
        className={classes.gitHub}
      >
        <AiFillGithub />
      </a>
    </div>
  );
};

export default SocialButtons;
