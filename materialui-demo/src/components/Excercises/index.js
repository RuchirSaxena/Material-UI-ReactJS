import React from "react";
import { Grid } from "@material-ui/core";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => {
  return (
    <Grid container spacing={16}>
      <Grid item sm={6}>
        <RightPanel style={style} />
      </Grid>
      <Grid item sm={6}>
        <LeftPanel style={style} />
      </Grid>
    </Grid>
  );
};
