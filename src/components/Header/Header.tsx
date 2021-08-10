import React from "react";
import classes from "./Header.module.css";
import Button from "@material-ui/core/Button";

export interface ANHeaderProps {}

const ANHeader: React.FC<ANHeaderProps> = () => {
  const buttons = [
    "About Me",
    "Resume",
    "Skills",
    "Recent Projects",
    "Contacts",
  ];
  let buttonsUI = buttons.map((button, index) => (
    <Button key={index} className={classes.btn}>
      {button}
    </Button>
  ));
  return (
    <div className={classes.headerContainer}>
      <header className={classes.mainHeader}>
        <h3>Adham Nour El-Waffaa</h3>
        <div>{buttonsUI}</div>
      </header>
    </div>
  );
};

export default ANHeader;
