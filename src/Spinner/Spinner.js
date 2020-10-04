import React from "react";
import classes from "./Spinner.module.css";
const Spinner = (props) => {
    return (
        <div className={classes.spinner}>
            <div className={classes.bounce1}></div>
            <div className={classes.bounce2}></div>
        </div>
    );
};

export default Spinner;
