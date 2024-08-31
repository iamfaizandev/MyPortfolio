import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Wifi from "@material-ui/icons/Wifi";
import WifiOff from "@material-ui/icons/WifiOff";
import useNetwork from "../../hooks/useNetwork";
import { Container, Typography } from "@material-ui";
import NetworkInfoTable from "../../hooks/networkInfoTable";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
  },
  icon: {
    fontSize: 100,
    margin: "0 auto",
  },
  active: {
    color: "green",
  },
  inactive: {
    color: "grey",
  },
});
export function Network() {
  const classes = useStyles();
  const iconActiveStyles = `${classes.icon} ${classes.active}`;
  const iconInactiveStyles = `${classes.icon} ${classes.inactive}`;
  const networkState = useNetwork();
  const {
    online,
    since,
    downLink,
    downLinkMax,
    effectiveType,
    rtt,
    saveData,
    type,
  } = networkState;
  return (
    <Container maxWidth="md">
      <div className={classes.container}>
        {online ? (
          <Wifi className={iconActiveStyles} />
        ) : (
          <WifiOff className={iconInactiveStyles} />
        )}
        <div>
          <h1>Network Stats:</h1>
          <NetworkInfoTable data={networkState} />
        </div>
      </div>
    </Container>
  );
}
