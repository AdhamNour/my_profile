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
      <h4>{percentage}</h4>
    </Card>
  );
};

export default CircularProgressSkill;
