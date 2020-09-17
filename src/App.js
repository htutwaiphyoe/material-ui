import React from "react";
import faker from "faker";

import Comment from "./Comment/Comment";
import ApprovalCard from "./ApprovalCard/ApprovalCard";
import "./App.css";

const App = () => {
    const date = new Date().toLocaleTimeString();
    return (
        <div className="ui container comments ">
            <ApprovalCard>
                <Comment
                    image={faker.image.avatar}
                    name={faker.name.findName}
                    date={date}
                    comment="Congrats"
                />
            </ApprovalCard>
        
            <ApprovalCard>
                <Comment
                    image={faker.image.avatar}
                    name={faker.name.findName}
                    date={date}
                    comment="Congratulations"
                />
            </ApprovalCard>
        </div>
    );
};

export default App;
