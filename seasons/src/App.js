import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.error)
      return <SeasonDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.error)
      return <SeasonDisplay error={this.state.error} />;

    return (
      <div>
        <SeasonDisplay />
        <h2>Loading...</h2>
      </div>
    );
  }
}
