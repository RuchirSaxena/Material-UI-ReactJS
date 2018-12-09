import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
const Footer = () => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="Item 1" />
        <Tab label="Item2" />
        <Tab label="Item3" />
      </Tabs>
    </Paper>
  );
};

export default Footer;
