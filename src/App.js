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
                comment={faker.random.words}
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={date}
                comment={faker.random.words}
            />
            <Comment
                image={faker.image.avatar}
                name={faker.name.findName}
                date={date}
                comment={faker.random.words}
            />
        </div>
    );
};

export default App;
