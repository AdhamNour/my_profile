import React, { useState } from "react";
import classes from "./Header.module.css";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import Collapse from "@material-ui/core/Collapse";
import { Link, animateScroll } from "react-scroll";

export interface ANHeaderProps {}

const ANHeader: React.FC<ANHeaderProps> = () => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const buttons = [
    {
      title: "About Me",
      href: "AboutMe",
      msg: "this section contains my personal information and a brief introduction about myself",
    },
    {
      title: "Education",
      href: "Education",
      msg: "this section contains the certificates I have earned",
    },
    { title: "Skills", href: "Skills" },
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
        onSetActive={(to) => {
          setMsg(`${to} Section: ${button.msg}`);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }}
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
      <div className={classes.alertHolder}>
        <Collapse in={open}>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="info"
            variant="filled"
          >
            {msg}
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};

export default ANHeader;
