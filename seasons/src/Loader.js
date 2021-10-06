import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <Typography variant="h4">Allow location to continue...</Typography>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
