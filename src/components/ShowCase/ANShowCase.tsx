import React from "react";
import classes from "./ANShowCase.module.css";
export interface ANShowCaseProps {}

const ANShowCase: React.SFC<ANShowCaseProps> = () => {
  return (
    <div className={classes.ANShowCaseContainer}>
      <div className={classes.ProfilePic}></div>
      <h1>Adham Nour El-Waffaa</h1>
      <p>Web developer | Mobile developer</p>
    </div>
  );
};

export default ANShowCase;
