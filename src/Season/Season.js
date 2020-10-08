import React from "react";
import classes from "./Season.module.css";
const seasonConfig = {
    summer: {
        text: "Let's hit the beach.",
        icon: "sun",
    },
    winter: {
        text: "Burr, it is chilly!",
        icon: "snowflake",
    },
};
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    }
    return lat > 0 ? "winter" : "summer";
};
const Season = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return (
        <div className={`${classes.season} ${classes[season]}`}>
            <i className={`${seasonConfig[season].icon} icon massive ${classes.icon_left}`}></i>
            <h1>{seasonConfig[season].text}</h1>
            <i className={`${seasonConfig[season].icon} icon massive ${classes.icon_right}`}></i>
        </div>
    );
};

export default Season;
