import React from "react";
import classes from "./Header.module.css";
import { Link, animateScroll } from "react-scroll";

export interface ANHeaderProps {}

const ANHeader: React.FC<ANHeaderProps> = () => {
  const buttons = [
    {
      title: "About Me",
      href: "AboutMe",
    },
    {
      title: "Education",
      href: "Education",
    },
    {
      title: "Skills",
      href: "Skills",
    },
    { title: "Recent Projects", href: "RecentProjects" },
    { title: "Contacts", href: "Contacts" },
  ];

  let buttonsUI = buttons.map((button, index) => {
    return (
      <Link
        className={classes.btn}
        to={button.href}
        smooth
        spy
        duration={500}
        activeClass={classes.activeBtn}
      >
        {button.title}
      </Link>
    );
  });
  return (
    <div className={classes.headerContainer}>
      <header className={classes.mainHeader}>
        <h3
          onClick={() => {
            animateScroll.scrollToTop();
          }}
        >
          Adham Nour El-Waffaa
        </h3>
        <div className={classes.buttonsContainer}>{buttonsUI}</div>
      </header>
      <div className={classes.alertHolder}></div>
    </div>
  );
};

export default ANHeader;
