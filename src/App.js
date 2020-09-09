import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const changeCurrentTime = () => {
        setCurrentTime(new Date().toLocaleTimeString());
    };
    useEffect(() => {
        changeCurrentTime();
    }, [currentTime]);
    const styleDiv = {
        fontSize: "50px",
        color: "#111",
        fontWeight: "bold",
    };
    return (
        <div className="App">
            <div style={styleDiv}>{currentTime}</div>
        </div>
    );
}

export default App;
