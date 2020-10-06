import React from "react";
import "./App.css";
import Spinner from "./Spinner/Spinner";
import Season from "./Season/Season";
class App extends React.Component {
    state = {
        lat: null,
        message: "",
    };
    componentDidMount() {
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
        if (this.state.lat && !this.state.message) {
            return <Season lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.message) {
            return <Spinner message={this.state.message} />;
        }
        return <Spinner message="Click allow to continue..." />;
    }
}

export default App;
