import React from "react";
import Spinner from "../../Spinner/Spinner";
import Season from "../../Season/Season";
class SeasonApp extends React.Component {
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

    getComponent() {
        if (this.state.lat && !this.state.message) {
            return <Season lat={this.state.lat} />;
        }
        if (!this.state.lat && this.state.message) {
            return <Spinner message={this.state.message} />;
        }
        return <Spinner message="Click allow to continue..." />;
    }
    render() {
        return this.getComponent();
    }
}

export default SeasonApp;
