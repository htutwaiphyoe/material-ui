import React from "react";
import faker from "faker";

import Comment from "./Comment/Comment";
import "./App.css";

const App = () => {
    return (
        <div className="ui container comments">
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={faker.date.recent}
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={faker.date.recent}
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={faker.date.recent}
            />
        </div>
    );
};

export default App;
