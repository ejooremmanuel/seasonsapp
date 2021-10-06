import React from "react";
import { Typography, Container } from "@material-ui/core";

const season = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  }
  return lat < 0 ? "Winter" : "Summer";
};

const SeasonDisplay = ({ error, lat }) => {
  season(lat, new Date().getMonth());
  return (
    <Container>
      <Typography>Season</Typography>
    </Container>
  );
};

export default SeasonDisplay;
