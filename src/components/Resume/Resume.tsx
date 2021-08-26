import React, { useEffect } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import { Typography, Paper, Icon } from "@material-ui/core";
import { FcGraduationCap } from "react-icons/fc";
import { FaUniversity } from "react-icons/fa";
import { SiCoursera, SiUdemy } from "react-icons/si";
import aos from "aos";
import "aos/dist/aos.css";

import classes from "./Resume.module.css";
export interface ResumeProps {}

const Resume: React.FC<ResumeProps> = () => {
  const myEducation = [
    {
      title: "Graduated from High School",
      date: "2016",
      Description:
        "Graduated from Mostafa Kamel High School with result of 95%",
      icon: (
        <Icon fontSize="large">
          <FcGraduationCap />
        </Icon>
      ),
    },
    {
      title: "Faculty of Engineering, Ain Shams University",
      date: "2016",
      Description:
        "Applied and Accepted in Faculty of Engineering, Ain Shams University",
      icon: (
        <Icon fontSize="medium" color="action">
          <FaUniversity />
        </Icon>
      ),
    },
    {
      title: (
        <a
          href="https://coursera.org/share/d35ee1021741f6ea702eeeec57ff63fc"
          target="_blank"
          rel="noreferrer"
        >
          Software Design and Architecture
        </a>
      ),
      date: "Jul20,2020",
      Description: (
        <p>
          Finished Software Design and Architecture Specification in Coursera,
          this specialization inculdes
          <ol className={classes.specializationCourses}>
            <li>
              <a
                href="https://coursera.org/share/1ee5e0c630f81b145f89f933f75e61a5"
                target="_blank"
                rel="noreferrer"
              >
                Object-Oriented Design
              </a>
            </li>
            <li>
              <a
                href="https://coursera.org/share/e94f9587919813ed5a33ee90a5dc1e6c"
                target="_blank"
                rel="noreferrer"
              >
                Design Patterns
              </a>
            </li>
            <li>
              <a
                href="https://coursera.org/share/5fb87ec4add07ef86a3064d3369a04e0"
                target="_blank"
                rel="noreferrer"
              >
                Software Architecture
              </a>
            </li>
            <li>
              <a
                href="https://coursera.org/share/478ed65d8df8371f88b262f0185fc57c"
                target="_blank"
                rel="noreferrer"
              >
                Service Oriented Architecture
              </a>
            </li>
          </ol>
        </p>
      ),
      icon: (
        <Icon fontSize="large" color="action">
          <SiCoursera />
        </Icon>
      ),
    },
    {
      title: (
        <a
          href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
          target="_blank"
          rel="noreferrer"
        >
          Flutter & Dart - The Complete Guide
        </a>
      ),
      date: "2020",
      Description: (
        <p>
          Studied the Flutter Course that is designed by Maximilian
          Schwarzmüller and built many applications
        </p>
      ),
      icon: (
        <Icon fontSize="large" color="action">
          <SiUdemy />
        </Icon>
      ),
    },
    {
      title: (
        <a
          href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
          target="_blank"
          rel="noreferrer"
        >
          React Native - The Practical Guide [2021 Edition]
        </a>
      ),
      date: "2021",
      Description: (
        <p>
          Studied the React Native Course that is designed by Maximilian
          Schwarzmüller and built many applications
        </p>
      ),
      icon: (
        <Icon fontSize="large" color="action">
          <SiUdemy />
        </Icon>
      ),
    },
    {
      title: (
        <a
          href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
          target="_blank"
          rel="noreferrer"
        >
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </a>
      ),
      date: "2021",
      Description: (
        <p>
          Studied the React Course that is designed by Maximilian Schwarzmüller
          and built many applications
        </p>
      ),
      icon: (
        <Icon fontSize="large" color="action">
          <SiUdemy />
        </Icon>
      ),
    },
    {
      title: (
        <a
          href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/"
          target="_blank"
          rel="noreferrer"
        >
          Modern HTML & CSS From The Beginning (Including Sass)
        </a>
      ),
      date: "2021",
      Description: (
        <p>
          Studied the HTML Course that is designed by Brad Traversy and built
          many applications
        </p>
      ),
      icon: (
        <Icon fontSize="large" color="action">
          <SiUdemy />
        </Icon>
      ),
    },
    {
      title: "Graduated from Faculty of Engineering, Ain Shams University",
      date: "2021",
      Description: (
        <p>
          Graduated from Faculty of Engineering, Ain Shams University Computers
          and Systems Department with result of General Grade{" "}
          <span>Very Good</span>, Project Grade <span>Excellent</span>
        </p>
      ),
      icon: (
        <Icon fontSize="large">
          <FcGraduationCap />
        </Icon>
      ),
    },
  ];

  const myEducationUI = [];
  for (let index = 0; index < myEducation.length; index++) {
    const element = myEducation[index];
    let Connector = null;
    Connector = <TimelineConnector />;
    if (index === myEducation.length - 1) {
      Connector = null;
    }
    const elementUI = (
      <TimelineItem key={index} data-aos="fade-up">
        <TimelineOppositeContent>{element.date}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>{element.icon}</TimelineDot>
          {Connector}
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {element.title}
            </Typography>
            <Typography>{element.Description}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    );
    myEducationUI.push(elementUI);
  }

  useEffect(() => {
    aos.init({ duration: 2000 });
  },[]);

  return (
    <div id="Education" className={classes.ResumeContainer}>
      <h1 data-aos="fade-zoom-in">My Education</h1>
      <Timeline align={window.screen.width > 450 ? "alternate" : "left"}>
        {myEducationUI}
      </Timeline>
    </div>
  );
};

export default Resume;
