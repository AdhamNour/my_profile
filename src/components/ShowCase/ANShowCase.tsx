import React from "react";
import classes from "./ANShowCase.module.css";
import SocialButtons from './SocialButtons/SocialButtons'
export interface ANShowCaseProps {}

const ANShowCase: React.FC<ANShowCaseProps> = () => {
  return (
    <div className={classes.ANShowCaseContainer} id="home" >
      <div className={classes.ProfilePic}></div>
      <h1>Adham Nour El-Waffaa</h1>
      <p>Web developer | Mobile developer</p>
      <SocialButtons />
    </div>
  );
};

export default ANShowCase;
