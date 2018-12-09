import React from "react";
import { Grid, Paper } from "@material-ui/core";

const style = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

export default props => {
  return (
    <Grid container spacing={16} sm={12}>
      <Grid item sm={6}>
        <Paper style={style.Paper}>left Panel</Paper>
      </Grid>
      <Grid item sm={6}>
        <Paper style={{ padding: 20, marginTop: 10, marginBottom: 10 }}>
          Right Panel
        </Paper>
      </Grid>
    </Grid>
  );
};
