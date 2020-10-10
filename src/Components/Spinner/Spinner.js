import React from "react";

const Spinner = (props) => (
    <div className="ui active dimmer">
        <div className="ui text loader">{props.status}</div>
    </div>
);

Spinner.defaultProps = {
    status: "Loading...",
};
export default Spinner;
