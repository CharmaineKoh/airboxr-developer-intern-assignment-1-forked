import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const Loading = () => {

  const useStyles = makeStyles(() => ({
    loading: {
      width: "50%",
      margin: "auto",
      "text-align": "center",
      padding: "10px"
      
    },
    text: {
      "text-align": "center",
      padding: "30px"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.loading}>
      <CircularProgress />
      <Typography className={classes.text}>Fetching data...</Typography>
    </div>
  );
};
