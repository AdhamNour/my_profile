import React from "react";
import classes from "./PieceOfPersonalInformation.module.css";
export interface PieceOfPersonalInformationProps {
  title: string;
  detail: string;
}

const PieceOfPersonalInformation: React.SFC<PieceOfPersonalInformationProps> =
  ({ title, detail }) => {
    return (
      <div className={classes.PieceOfPersonalInformationContainer}>
        <p className={classes.title}>{title}:</p>
        <p className={classes.detail}>{detail}</p>
      </div>
    );
  };

export default PieceOfPersonalInformation;
