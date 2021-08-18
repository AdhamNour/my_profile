import React from "react";
import { Card } from "@material-ui/core";

import classes from "./CircularProgressSkill.module.css";

export interface CircularProgressSkillProps {
  skillName: string;
  percentage: number;
  imp?: string;
}

const CircularProgressSkill: React.SFC<CircularProgressSkillProps> = ({
  skillName,
  percentage,
  imp,
}) => {
  let containerClassName = [classes.circularProgressSkillsElement];
  if (imp) {
    containerClassName.push(classes.circularProgressSkillsElementImportant);
  }
  return (
    <Card className={containerClassName.join(" ")} raised>
      <h2>{skillName}</h2>
      <div className={classes.singleChart}>
        <svg
          viewBox="0 0 36 36"
          className={[classes.circularChart, classes.orange].join(" ")}
        >
          <path
            className={classes.circleBg}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={classes.circle}
            stroke-dasharray={`${percentage},100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className={classes.percentage}>
            {percentage}
          </text>
        </svg>
      </div>
    </Card>
  );
};

export default CircularProgressSkill;
