import React, { useState } from "react";
import classes from "./Header.module.css";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CheckIcon from "@material-ui/icons/Check";
import Collapse from "@material-ui/core/Collapse";

export interface ANHeaderProps {}

const ANHeader: React.FC<ANHeaderProps> = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const buttons = [
    { title: "About Me", href: "#AboutMe" },
    { title: "Resume", href: "#Resume" },
    { title: "Skills", href: "#Skills" },
    { title: "Recent Projects", href: "#RecentProjects" },
    { title: "Contacts", href: "#Contacts" },
  ];
  
  let buttonsUI = buttons.map((button, index) => {
    let _className = "";
    if (index === selectedIndex) {
      _className = classes.activeBtn;
    }
    return (
      <Button
        className={[classes.btn, _className].join(" ")}
        onClick={() => {
          setSelectedIndex(index);
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 1500);
        }}
        href={button.href}
      >
        {button.title}
      </Button>
    );
  });
  return (
    <div className={classes.headerContainer}>
      <header className={classes.mainHeader}>
        <h3>Adham Nour El-Waffaa</h3>
        <div className={classes.buttonsContainer}>{buttonsUI}</div>
      </header>
      <div className={classes.alertHolder}>
        <Collapse in={open}>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            severity="warning"
            variant="filled"
          >
            This Feature is not Implemented yet. The Icon Color would change but
            nothing would be happen
          </Alert>
        </Collapse>
      </div>
    </div>
  );
};

export default ANHeader;
