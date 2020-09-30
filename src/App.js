import React from "react";
import "./App.css";

class App extends React.Component {
    state = {
        latitude: null,
        message: "",
    };

    success = (position) => {
        this.setState({
            latitude: position.coords.latitude,
        });
    };

    error = (error) => {
        this.setState({
            message: error.message,
        });
    };
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.success(position),
            (error) => this.error(error)
        );
    }

    render() {
        return (
            <div>
                <h1>{this.state.latitude}</h1>
            </div>
        );
    }
}

export default App;
