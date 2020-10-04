import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            message: "",
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => this.success(position),
            (error) => this.error(error)
        );
    }

    success = (position) => {
        this.setState({
            lat: position.coords.latitude,
        });
    };

    error = (error) => {
        this.setState({
            message: error.message,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.lat}</h1>
            </div>
        );
    }
}

export default App;
