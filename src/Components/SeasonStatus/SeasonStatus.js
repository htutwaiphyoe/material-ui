import React from "react";
import classes from "./SeasonStatus.module.css";

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        icon: "sun",
    },
    winter: {
        text: "It is chilly",
        icon: "snowflake",
    },
};
const chooseSeason = (lat) => {
    const month = new Date().getMonth() + 1;
    if (month > 3 && month < 10) {
        if (lat > 0) {
            return "summer";
        }
        return "winter";
    } else {
        if (lat > 0) {
            return "winter";
        }
        return "summer";
    }
};
const SeasonStatus = (props) => {
    const season = chooseSeason(props.lat);
    return (
        <div className={`${classes.SeasonStatus} ${classes[season]}`}>
            <i className={`${seasonConfig[season].icon} icon massive ${classes.iconLeft}`}></i>
            <h1>{seasonConfig[season].text}</h1>
            <i className={`${seasonConfig[season].icon} icon massive ${classes.iconRight}`}></i>
        </div>
    );
};

export default SeasonStatus;
