import React from "react";
import "./App.css";
import Spinner from "./Spinner/Spinner";
class App extends React.Component {
    state = {
        lat: null,
        message: "",
    };
    componentDidMount() {
        console.log("Component mounted");
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.success(position),
            (error) => this.error(error)
        );
    }

    componentDidUpdate() {
        console.log("Component Updated");
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
        let element = null;
        if (this.state.lat && !this.state.message) {
            element = <p>{this.state.lat}</p>;
        } else if (!this.state.lat && this.state.message) {
            element = <p>{this.state.message}</p>;
        } else {
            element = <Spinner />;
        }
        return (
            <div>
                <h1>{element}</h1>
            </div>
        );
    }
}

export default App;
