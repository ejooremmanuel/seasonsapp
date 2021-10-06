import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";
import Error from "./Error";

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.error)
      return <SeasonDisplay lat={this.state.lat} />;
    if (!this.state.lat && this.state.error)
      return <Error>{this.state.error} </Error>;
    return <Loader />;
  }

  render() {
    return <> {this.renderContent()}</>;
  }
}
