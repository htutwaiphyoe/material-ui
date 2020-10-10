import React, { Component } from "react";
import SeasonStatus from "../../Components/SeasonStatus/SeasonStatus";
import Spinner from "../../Components/Spinner/Spinner";
class Season extends Component {
    state = {
        lat: null,
        errMsg: null,
    };

    succss(p) {
        this.setState({
            lat: p.coords.latitude,
        });
    }
    error(e) {
        this.setState({
            errMsg: e.message,
        });
    }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.succss(position),
            (err) => this.error(err)
        );
    }

    show() {
        if (this.state.lat && !this.state.errMsg) {
            return <SeasonStatus lat={this.state.lat} />;
        } else if (!this.state.lat && this.state.errMsg) {
            return <Spinner status={this.state.errMsg} />;
        }
        return <Spinner status="Click allow to continue..." />;
    }
    render() {
        return this.show();
    }
}

export default Season;
