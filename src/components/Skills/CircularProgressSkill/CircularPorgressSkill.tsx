import React, { useRef } from "react";
import { Card } from "@material-ui/core";
import sha512 from "crypto-js/sha512";
import { useInViewport } from "react-in-viewport";
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
  const ref = useRef();
  const { inViewport } = useInViewport(
    ref,
    {},
    { disconnectOnLeave: false },
    {}
  );
  const hashedItem = sha512(skillName);
  let avatarColor = "#";
  for (let index = 0; index < 6; index++) {
    const element = hashedItem.words[index];
    const newIndex = Math.abs(element % 16);
    avatarColor = avatarColor.concat(newIndex.toString(16));
  }
  let containerClassName = [classes.circularProgressSkillsElement];
  if (imp) {
    containerClassName.push(classes.circularProgressSkillsElementImportant);
  }
  return (
    <Card className={containerClassName.join(" ")} raised ref={ref}>
      <h2>{skillName}</h2>
      <div className={classes.singleChart}>
        <svg
          viewBox="0 0 36 36"
          className={[classes.circularChart].join(" ")}
          style={{ stroke: avatarColor }}
        >
          <path
            className={classes.circleBg}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={[
              classes.circle,
              inViewport ? classes.animateProgress : "",
            ].join(" ")}
            stroke-dasharray={`${percentage},100`}
            d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text
            x="18"
            y="20.35"
            className={classes.percentage}
            style={{ fill: avatarColor }}
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </Card>
  );
};

export default CircularProgressSkill;
