import React from "react";

const getSeason = (lat, month) => {
    console.log(lat);
    if (month > 2 && month < 9) {
        return lat > 0 ? "Summer" : "Winter";
    }
    return lat > 0 ? "Winter" : "Summer";
};
const Season = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    return <div>{season}</div>;
};

export default Season;
