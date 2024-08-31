import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  infoTable: {
    borderCollapse: "collapse",
    width: "100%",
    "& td, th": {
      border: "1px solid #dddddd",
      textAlign: "left",
      padding: 8,
    },
    "& td:nth-child(odd),th:nth-child(odd)": {
      backgroundColor: "orange",
      width: "40%",
    },
  },
});
const NetworkInfoTable = ({ data }) => {
  const classes = useStyles();
  return (
    <table className={classes.infoTable}>
      <thead>
        <tr>
          <th>Connection Property</th>
          <th>Connection Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value?.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default NetworkInfoTable;
