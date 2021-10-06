import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
// import { Container, Icon } from "semantic-ui-react";
//<Icon enabled name="name"/>

const useStyles = makeStyles((theme) => ({
  iconLeft: {
    position: "absolute",
    top: 10,
    left: 10,
    fontSize: "100px",
  },
  iconRight: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: "100px",
  },
  season__display: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
}));

const season = (lat, month, error) => {
  if (error) {
    return error;
  }
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = ({ lat, error }) => {
  const classes = useStyles();
  let showSeason = season(lat, new Date().getMonth(), error);
  const seasonConfig = {
    Summer: (
      <div
        className={classes.season__display}
        style={{ backgroundColor: "orange", color: "red" }}
      >
        <WbSunnyIcon fontSize="large" className={classes.iconLeft} />
        <Typography variant="h2">Let's hit the beach!</Typography>
        <WbSunnyIcon fontSize="large" className={classes.iconRight} />
      </div>
    ),
    Winter: (
      <div
        className={classes.season__display}
        style={{ backgroundColor: "aliceblue", color: "blue" }}
      >
        <AcUnitIcon fontSize="large" className={classes.iconLeft} />
        <Typography variant="h2">Burr... it's chilly</Typography>
        <AcUnitIcon fontSize="large" className={classes.iconRight} />
      </div>
    ),
    error: <Typography variant="h2">{error}</Typography>,
  };
  return <>{seasonConfig[showSeason]}</>;
};

export default SeasonDisplay;
