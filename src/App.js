import React from "react";
import faker from "faker";

import Comment from "./Comment/Comment";
import "./App.css";

const App = () => {
    const date = new Date().toLocaleTimeString();
    return (
        <div className="ui container comments">
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={date}
                comment="Congrats"
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={date}
                comment="Congrats again"
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={date}
                comment="Congratulations"
            />
        </div>
    );
};

export default App;
