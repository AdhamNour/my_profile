import React, { useEffect } from "react";
import PieceOfPersonalInformation from "./PieceOfPersonalInformation/PieceOfPersonalInfromation";
import classes from "./AboutMe.module.css";
import aos from "aos";
import "aos/dist/aos.css";

export interface AboutMeProps {}

const AboutMe: React.SFC<AboutMeProps> = () => {
  useEffect(() => {
    aos.init({ duration: 2000 });
  });
  const myPersonalInformation = [
    { title: "Full Name", detail: "Adham Nour El-Waffaa" },
    { title: "Phone Number", detail: "+20 1100 998 730" },
    { title: "Email", detail: "adhamnourelwaffaa@gmail.com" },
    { title: "Website", detail: "https://anprofile.herokuapp.com/" },
  ];
  const myPersonalInformationUI = myPersonalInformation.map(
    (pieceofPersonalInformation, index) => (
      <PieceOfPersonalInformation {...pieceofPersonalInformation} key={index} />
    )
  );
  return (
    <div className={classes.AboutMeContainer} id="AboutMe">
      <h1 data-aos="fade-zoom-in">About Me</h1>
      <div className={classes.Details}>
        <div data-aos="fade-left" className={classes.PersonalInformation}>
          {myPersonalInformationUI}
        </div>
        <div data-aos="fade-right" className={classes.BriefIntroduction}>
          <h2>Hello There!</h2>
          <p>
            My Name is Adham Nour El-Waffaa,Graduated from Faculty of
            Engineering Ain Shams University, Computers and Systems Department,
            Experienced in Mobile development using both Flutter and Reat Native
            Frameworks, and Frontend Development using HTML5, CSS3, JavaScript
            in addition to React as a framework
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
