import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";
const Footer = ({ muscles }) => {
  const muslcesData = muscles.map((group, i) => {
    return <Tab key={i} label={group} />;
  });
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muslcesData}
      </Tabs>
    </Paper>
  );
};

export default Footer;
