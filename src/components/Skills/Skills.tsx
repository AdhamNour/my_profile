import React, { useEffect } from "react";
import classes from "./Skills.module.css";
import aos from "aos";
import "aos/dist/aos.css";
import CircularProgressSkill from "./CircularProgressSkill/CircularPorgressSkill";
export interface SkillsProps {}

const Skills: React.SFC<SkillsProps> = () => {
  useEffect(() => {
    aos.init({ duration: 500 });
  });
  const skills = [
    { skillName: "HTML5", precentage: 90, imp: "true" },
    { skillName: "CSS3", precentage: 90, imp: "true" },
    { skillName: "Javascript/Typescript", precentage: 90, imp: "true" },
    { skillName: "Flutter", precentage: 95, imp: "true" },
    { skillName: "React", precentage: 95, imp: "true" },
    { skillName: "React Native", precentage: 95, imp: "true" },
    { skillName: "MySQL/SQLite", precentage: 95, imp: "true" },
    { skillName: "SCSS", precentage: 90, imp: "true" },
    { skillName: "Python", precentage: 70 },
    { skillName: "C++", precentage: 75 },
    { skillName: "Native Android", precentage: 75 },
    { skillName: "Java", precentage: 80 },
    { skillName: "NodeJS", precentage: 80 },
    { skillName: "Unity", precentage: 65 },
  ];
  const SkillsUI = skills.map((skill, index) => (
    <CircularProgressSkill
      skillName={skill.skillName}
      percentage={skill.precentage}
      imp={skill.imp}
      key={index}
    />
  ));
  return (
    <div
      className={classes.skillsContainer}
      id="Skills"
      data-aos="fade-zoom-in"
    >
      <h1>My Skills</h1>
      <div className={classes.circularProgressSkillsContainer}>{SkillsUI}</div>
    </div>
  );
};

export default Skills;
